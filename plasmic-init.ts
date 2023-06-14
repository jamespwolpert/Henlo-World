import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import Counter from "./pages/counter";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "af6iVCdAfw7D8YWw7uiCRp",
      token: "3mGMPf3lpY7u81Yw1B6cr5bklcJpXvMU9bMrBPExln0cE5KT7TeCYBtaPWauHB6e2clrAvYVLHgVwIpVw",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

PLASMIC.registerComponent(Counter, {
  name: 'Counter',
  props: {
    buttonClassName: {
      type: 'class',
      selectors: [
        // Plasmic Studio user can also in addition style the button's
        // hovered and pressed state
        {
          selector: ':hover',
          label: 'Hovered'
        },
        {
          selector: ':active',
          label: 'Pressed'
        }
      ]
    },
    countClassName: {
      type: 'class',
      selectors: [
        // You can also use a selector that uses the non-standard
        // :component and :self selectors, to refer to the component root
        // and the element receiving the class. Here, we are targeting
        // when the component root has data-used=true applied.
        {
          selector: `:component[data-used="true"] :self`,
          label: 'When used'
        }
      ],
      // We can limit what kind of styles can be applied to this element
      styleSections: ['typography']
    }
  }
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmismc project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plaic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
