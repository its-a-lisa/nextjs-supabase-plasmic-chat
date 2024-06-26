// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xc4oHLU6bxB8LcxYsqWiRJ
// Component: b2YLxRmcFCqB

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
import sty from "./PlasmicChatMessage.module.css"; // plasmic-import: b2YLxRmcFCqB/css

createPlasmicElementProxy;

export type PlasmicChatMessage__VariantMembers = {
  isSent: "isSent";
};
export type PlasmicChatMessage__VariantsArgs = {
  isSent?: SingleBooleanChoiceArg<"isSent">;
};
type VariantPropType = keyof PlasmicChatMessage__VariantsArgs;
export const PlasmicChatMessage__VariantProps = new Array<VariantPropType>(
  "isSent"
);

export type PlasmicChatMessage__ArgsType = {
  content?: React.ReactNode;
  createdAt?: React.ReactNode;
  username?: React.ReactNode;
};
type ArgPropType = keyof PlasmicChatMessage__ArgsType;
export const PlasmicChatMessage__ArgProps = new Array<ArgPropType>(
  "content",
  "createdAt",
  "username"
);

export type PlasmicChatMessage__OverridesType = {
  root?: Flex__<"div">;
  avatar?: Flex__<typeof Avatar>;
  chatWrapper?: Flex__<"div">;
};

export interface DefaultChatMessageProps {
  content?: React.ReactNode;
  createdAt?: React.ReactNode;
  username?: React.ReactNode;
  isSent?: SingleBooleanChoiceArg<"isSent">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicChatMessage__RenderFunc(props: {
  variants: PlasmicChatMessage__VariantsArgs;
  args: PlasmicChatMessage__ArgsType;
  overrides: PlasmicChatMessage__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isSent",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isSent
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        { [sty.rootisSent]: hasVariant($state, "isSent", "isSent") }
      )}
    >
      <Avatar
        data-plasmic-name={"avatar"}
        data-plasmic-override={overrides.avatar}
        className={classNames("__wab_instance", sty.avatar)}
        size={"_45"}
      />

      <Stack__
        as={"div"}
        data-plasmic-name={"chatWrapper"}
        data-plasmic-override={overrides.chatWrapper}
        hasGap={true}
        className={classNames(projectcss.all, sty.chatWrapper, {
          [sty.chatWrapperisSent]: hasVariant($state, "isSent", "isSent")
        })}
      >
        <div className={classNames(projectcss.all, sty.freeBox___3HdtP)}>
          {renderPlasmicSlot({
            defaultContents:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            value: args.content
          })}
        </div>
        <div className={classNames(projectcss.all, sty.freeBox__acTkP)}>
          {renderPlasmicSlot({
            defaultContents: "8 seconds ago",
            value: args.createdAt,
            className: classNames(sty.slotTargetCreatedAt)
          })}
        </div>
      </Stack__>
      <div
        className={classNames(projectcss.all, sty.freeBox__c3APb, {
          [sty.freeBoxisSent__c3APb9HEfH]: hasVariant(
            $state,
            "isSent",
            "isSent"
          )
        })}
      >
        {renderPlasmicSlot({
          defaultContents: "Enter some text",
          value: args.username,
          className: classNames(sty.slotTargetUsername, {
            [sty.slotTargetUsernameisSent]: hasVariant(
              $state,
              "isSent",
              "isSent"
            )
          })
        })}
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "avatar", "chatWrapper"],
  avatar: ["avatar"],
  chatWrapper: ["chatWrapper"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  avatar: typeof Avatar;
  chatWrapper: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChatMessage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChatMessage__VariantsArgs;
    args?: PlasmicChatMessage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChatMessage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChatMessage__ArgsType,
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
          internalArgPropNames: PlasmicChatMessage__ArgProps,
          internalVariantPropNames: PlasmicChatMessage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChatMessage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChatMessage";
  } else {
    func.displayName = `PlasmicChatMessage.${nodeName}`;
  }
  return func;
}

export const PlasmicChatMessage = Object.assign(
  // Top-level PlasmicChatMessage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    avatar: makeNodeComponent("avatar"),
    chatWrapper: makeNodeComponent("chatWrapper"),

    // Metadata about props expected for PlasmicChatMessage
    internalVariantProps: PlasmicChatMessage__VariantProps,
    internalArgProps: PlasmicChatMessage__ArgProps
  }
);

export default PlasmicChatMessage;
/* prettier-ignore-end */
