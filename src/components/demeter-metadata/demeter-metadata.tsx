import { Component, Host, Prop, State, h } from '@stencil/core';
import { queryFeatures } from '@esri/arcgis-rest-feature-layer';

@Component({
  tag: 'demeter-metadata',
  styleUrl: 'demeter-metadata.css',
  shadow: true,
})
export class DemeterMetadata {

  @Prop() featureId: string;
  @Prop() featureLayerUrl: string;
  @Prop() fields: any = [];
  @Prop() distance: number = 20;

  @State() feature: any;
  @State() nearbyFeatures: any = [];
  @State() similarFeatures: any = "";
  @State() uniqueValues: any = "";
  @State() totalFeatures: any = "";

  async componentWillLoad() {
    await this.getFeatureMetadata();
  }
  async getFeatureMetadata() {
    const response = await queryFeatures({
      url: this.featureLayerUrl,
      where: "OBJECTID = " + this.featureId,
      outFields: "*",
      returnGeometry: true,
      resultRecordCount: 1,
      outSR: '4326'
    })
    //@ts-ignore
    this.feature = response.features[0];
    this.getNearbyFeatureMetadata(this.feature.geometry);
    this.getSimilarFeatureMetadata('CMMN_NM', this.feature.attributes.CMMN_NM);
    this.getTotalFeatureMetadata();

  }

  async getSimilarFeatureMetadata(field:string, value: string) {
    const aggregate = await queryFeatures({
      url: this.featureLayerUrl,
      where: `${field} = '${value}'`,
      returnCountOnly: true,
      groupByFieldsForStatistics: field,
      outFields: "*",
      returnGeometry: false
    })
    //@ts-ignore
    this.similarFeatures = aggregate.count;
    console.log("Aggregate", {aggregate});
  }
  async getTotalFeatureMetadata() {
    const total = await queryFeatures({
      url: this.featureLayerUrl,
      returnCountOnly: true,
      returnGeometry: false
    })
    //@ts-ignore
    this.totalFeatures = total.count;
  }

  async getNearbyFeatureMetadata(location: any) {

    const queryGeometry = {
      x: location.x,
      y: location.y,
      spatialReference: {
        wkid: 4326
      }
    };

    const response = await queryFeatures({
      url: this.featureLayerUrl,
      outFields: "*",
      returnGeometry: true,
      outSR: '4326',
      geometryType: "esriGeometryPoint",
      geometry: queryGeometry,
      distance: this.distance,
      units: "esriSRUnit_Meter"
    })
    //@ts-ignore
    this.nearbyFeatures = response.features;
    // console.log("Nearby Features", {features: response.features});
  }  

  convertAttributeByType(attribute: string, type: string) {
    if (type === "date") {
      return new Date(attribute).toLocaleDateString();
    } else {
      return attribute;
    }

  }

  render() {
    return (
      <Host>
        <slot></slot>
        <h3>Exploring this Feature</h3>
        {this.renderMetadata(this.feature)}
        
        <h4>Similar Features</h4>
        {JSON.stringify(this.similarFeatures)}


        <h4>Total Features</h4>
        {JSON.stringify(this.totalFeatures)}
        
        <h4>Nearby Features</h4>
        <div id="nearby">
        {this.nearbyFeatures.map(feature => {
          return(this.renderMetadata(feature));
        })}
        </div>

        {/* <p>Feature: {JSON.stringify(this.feature)}</p> */}
      </Host>
    );
  }


  viewFeature(featureId: string) {
    open(`/?featureId=${featureId}`, '_top')
  }
  private renderMetadata(feature: any) {
    return <calcite-card
      class="feature"
      onClick={() => this.viewFeature(feature.attributes.OBJECTID)}
    ><ul>
      {this.fields.map(field => {
        return (
          <li>
            {field.name}: {this.convertAttributeByType(feature.attributes[field.attribute], field.type)}
          </li>
        );
      })}
    </ul></calcite-card>;
  }
}
