import { Component, Host, Prop, h } from '@stencil/core';
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath("https://js.arcgis.com/calcite-components/1.4.3/assets");

@Component({
  tag: 'demeter-app',
  styleUrl: 'demeter-app.css',
  shadow: true,
})
export class DemeterApp {

  @Prop() featureId: string;
  @Prop() datasetUrl: string;

  componentWillLoad() {
    console.log("Feature ID", this.featureId);
  }
  render() {
    return (
      <Host>
        <slot></slot>
        Hello from Demeter!
        <div class="container">
        <demeter-metadata
          featureId={this.featureId}
          featureLayerUrl={this.datasetUrl}
          fields={[
            {name: "Location", attribute: 'VICINITY', type: "string"}, 
            {name: "Scientific Name", attribute: 'SCI_NM', type: "string"}, 
            {name: "Common Name", attribute: 'CMMN_NM', type: "string"}, 
            {name: "Diameter (at breast height)", attribute: 'DBH', type: "string"}, 
            {name: "Condition", attribute: 'CONDITION', type: "string"}, 
            {name: "Last Checkup", attribute: 'CONDITIODT', type: "date"}, 
            {name: 'Date Planted', attribute: 'DATE_PLANT', type: "date"}
          ]}
        >
        </demeter-metadata>
        </div>
      </Host>
    );
  }

}
