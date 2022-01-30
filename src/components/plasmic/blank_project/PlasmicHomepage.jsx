// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ufiCczPYH62yBKd7T3bcv5
// Component: mv3V0kiFFq
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Checkbox from "../../Checkbox"; // plasmic-import: 3spv9Dx3FIl/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: ufiCczPYH62yBKd7T3bcv5/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: mv3V0kiFFq/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <h1
            data-plasmic-name={"h1"}
            data-plasmic-override={overrides.h1}
            className={classNames(
              projectcss.all,
              projectcss.h1,
              projectcss.__wab_text,
              sty.h1
            )}
          >
            {"Welcome to your first page."}
          </h1>

          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            <React.Fragment>
              <React.Fragment>
                {
                  "If you haven't already done so, go back and learn the basics by going through the Plasmic Levels tutorial.\n\nIt's always easier to start from examples! Add a new page using a template—do this from the list of pages in the top left (the gray + button).\n\nOr press the big blue + button to start dragging items into this page.\n\nIntegrate this project into your codebase—press the "
                }
              </React.Fragment>
              <span
                className={"plasmic_default__all plasmic_default__span"}
                style={{ fontWeight: 700 }}
              >
                {"Code"}
              </span>
              <React.Fragment>
                {
                  " button in the top right and follow the quickstart instructions.\n\nJoin our Slack community (icon in bottom left) for help any time."
                }
              </React.Fragment>
            </React.Fragment>
          </div>

          <Checkbox
            data-plasmic-name={"checkbox"}
            data-plasmic-override={overrides.checkbox}
            className={classNames("__wab_instance", sty.checkbox)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "h1", "text", "checkbox"],
  h1: ["h1"],
  text: ["text"],
  checkbox: ["checkbox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    h1: makeNodeComponent("h1"),
    text: makeNodeComponent("text"),
    checkbox: makeNodeComponent("checkbox"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
