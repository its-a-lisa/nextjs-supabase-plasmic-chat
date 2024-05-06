// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xc4oHLU6bxB8LcxYsqWiRJ
// Component: JYAayWifZJDz

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

import Avatar from "../../Avatar"; // plasmic-import: eR0J_kIG_8zw/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: xc4oHLU6bxB8LcxYsqWiRJ/projectcss
import sty from "./PlasmicChatListItem.module.css"; // plasmic-import: JYAayWifZJDz/css

createPlasmicElementProxy;

export type PlasmicChatListItem__VariantMembers = {};
export type PlasmicChatListItem__VariantsArgs = {};
type VariantPropType = keyof PlasmicChatListItem__VariantsArgs;
export const PlasmicChatListItem__VariantProps = new Array<VariantPropType>();

export type PlasmicChatListItem__ArgsType = {
  roomName?: React.ReactNode;
};
type ArgPropType = keyof PlasmicChatListItem__ArgsType;
export const PlasmicChatListItem__ArgProps = new Array<ArgPropType>("roomName");

export type PlasmicChatListItem__OverridesType = {
  chatListItem?: Flex__<"div">;
  avatar?: Flex__<typeof Avatar>;
  freeBox?: Flex__<"div">;
};

export interface DefaultChatListItemProps {
  roomName?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChatListItem__RenderFunc(props: {
  variants: PlasmicChatListItem__VariantsArgs;
  args: PlasmicChatListItem__ArgsType;
  overrides: PlasmicChatListItem__OverridesType;
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
    <Stack__
      as={"div"}
      data-plasmic-name={"chatListItem"}
      data-plasmic-override={overrides.chatListItem}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.chatListItem
      )}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        size={"_60"}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.roomName,
          className: classNames(sty.slotTargetRoomName)
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  chatListItem: ["chatListItem", "avatar", "freeBox"],
  avatar: ["avatar"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  chatListItem: "div";
  avatar: typeof Avatar;
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChatListItem__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChatListItem__VariantsArgs;
    args?: PlasmicChatListItem__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChatListItem__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChatListItem__ArgsType,
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
          internalArgPropNames: PlasmicChatListItem__ArgProps,
          internalVariantPropNames: PlasmicChatListItem__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChatListItem__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "chatListItem") {
    func.displayName = "PlasmicChatListItem";
  } else {
    func.displayName = `PlasmicChatListItem.${nodeName}`;
  }
  return func;
}

export const PlasmicChatListItem = Object.assign(
  // Top-level PlasmicChatListItem renders the root element
  makeNodeComponent("chatListItem"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicChatListItem
    internalVariantProps: PlasmicChatListItem__VariantProps,
    internalArgProps: PlasmicChatListItem__ArgProps
  }
);

export default PlasmicChatListItem;
/* prettier-ignore-end */
