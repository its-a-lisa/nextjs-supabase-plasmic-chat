// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xc4oHLU6bxB8LcxYsqWiRJ
// Component: uzTBTgVOSNH8

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Layout from "../../Layout"; // plasmic-import: rzxNlgznxGgt/component
import Chat from "../../Chat"; // plasmic-import: TVmNRZ5gGwh1/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: xc4oHLU6bxB8LcxYsqWiRJ/projectcss
import sty from "./PlasmicDocumentation.module.css"; // plasmic-import: uzTBTgVOSNH8/css

createPlasmicElementProxy;

export type PlasmicDocumentation__VariantMembers = {};
export type PlasmicDocumentation__VariantsArgs = {};
type VariantPropType = keyof PlasmicDocumentation__VariantsArgs;
export const PlasmicDocumentation__VariantProps = new Array<VariantPropType>();

export type PlasmicDocumentation__ArgsType = {};
type ArgPropType = keyof PlasmicDocumentation__ArgsType;
export const PlasmicDocumentation__ArgProps = new Array<ArgPropType>();

export type PlasmicDocumentation__OverridesType = {
  root?: Flex__<"div">;
  layout?: Flex__<typeof Layout>;
};

export interface DefaultDocumentationProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDocumentation__RenderFunc(props: {
  variants: PlasmicDocumentation__VariantsArgs;
  args: PlasmicDocumentation__ArgsType;
  overrides: PlasmicDocumentation__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Layout
            data-plasmic-name={"layout"}
            data-plasmic-override={overrides.layout}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "layout"],
  layout: ["layout"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  layout: typeof Layout;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDocumentation__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDocumentation__VariantsArgs;
    args?: PlasmicDocumentation__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDocumentation__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDocumentation__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDocumentation__ArgProps,
          internalVariantPropNames: PlasmicDocumentation__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDocumentation__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDocumentation";
  } else {
    func.displayName = `PlasmicDocumentation.${nodeName}`;
  }
  return func;
}

export const PlasmicDocumentation = Object.assign(
  // Top-level PlasmicDocumentation renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    layout: makeNodeComponent("layout"),

    // Metadata about props expected for PlasmicDocumentation
    internalVariantProps: PlasmicDocumentation__VariantProps,
    internalArgProps: PlasmicDocumentation__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDocumentation;
/* prettier-ignore-end */
