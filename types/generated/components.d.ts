import type { Schema, Attribute } from '@strapi/strapi';

export interface SliderSlider extends Schema.Component {
  collectionName: 'components_slider_sliders';
  info: {
    displayName: 'Hero';
    icon: 'command';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Description: Attribute.Blocks;
    ButtonTitle: Attribute.String;
    ButtonURL: Attribute.String;
    Image: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slider.slider': SliderSlider;
    }
  }
}
