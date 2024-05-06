// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xc4oHLU6bxB8LcxYsqWiRJ
// Component: hE1A8FLqk6_K

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

import UploadAvatar from "../../UploadAvatar"; // plasmic-import: DnILS3mV5j5c/component
import TextInput from "../../TextInput"; // plasmic-import: FeO9F9kqLFEu/component
import Button from "../../Button"; // plasmic-import: 52M_F0RpAHXe/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: xc4oHLU6bxB8LcxYsqWiRJ/projectcss
import sty from "./PlasmicUserProfile.module.css"; // plasmic-import: hE1A8FLqk6_K/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: kbzAdglyU59e/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: b3FhWjF3yC4U/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: c0CcLIFV2w9Y/icon

createPlasmicElementProxy;

export type PlasmicUserProfile__VariantMembers = {
  isError: "isError";
};
export type PlasmicUserProfile__VariantsArgs = {
  isError?: SingleBooleanChoiceArg<"isError">;
};
type VariantPropType = keyof PlasmicUserProfile__VariantsArgs;
export const PlasmicUserProfile__VariantProps = new Array<VariantPropType>(
  "isError"
);

export type PlasmicUserProfile__ArgsType = {
  errorMessage?: React.ReactNode;
};
type ArgPropType = keyof PlasmicUserProfile__ArgsType;
export const PlasmicUserProfile__ArgProps = new Array<ArgPropType>(
  "errorMessage"
);

export type PlasmicUserProfile__OverridesType = {
  root?: Flex__<"div">;
  text?: Flex__<"div">;
  uploadAvatar?: Flex__<typeof UploadAvatar>;
  firstNameInput?: Flex__<typeof TextInput>;
  lastNameInput?: Flex__<typeof TextInput>;
  saveProfileButton?: Flex__<typeof Button>;
  link?: Flex__<"a"> & Partial<LinkProps>;
};

export interface DefaultUserProfileProps {
  errorMessage?: React.ReactNode;
  isError?: SingleBooleanChoiceArg<"isError">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicUserProfile__RenderFunc(props: {
  variants: PlasmicUserProfile__VariantsArgs;
  args: PlasmicUserProfile__ArgsType;
  overrides: PlasmicUserProfile__OverridesType;
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
        path: "firstNameInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "lastNameInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "isError",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isError
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
        { [sty.rootisError]: hasVariant($state, "isError", "isError") }
      )}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"Update Profile"}
      </div>
      <UploadAvatar
        data-plasmic-name={"uploadAvatar"}
        data-plasmic-override={overrides.uploadAvatar}
        className={classNames("__wab_instance", sty.uploadAvatar)}
      />

      <TextInput
        data-plasmic-name={"firstNameInput"}
        data-plasmic-override={overrides.firstNameInput}
        className={classNames("__wab_instance", sty.firstNameInput)}
        onChange={(...eventArgs) => {
          generateStateOnChangeProp($state, ["firstNameInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        placeholder={"First Name"}
        value={
          generateStateValueProp($state, ["firstNameInput", "value"]) ?? ""
        }
      />

      <TextInput
        data-plasmic-name={"lastNameInput"}
        data-plasmic-override={overrides.lastNameInput}
        className={classNames("__wab_instance", sty.lastNameInput)}
        onChange={(...eventArgs) => {
          generateStateOnChangeProp($state, ["lastNameInput", "value"])(
            (e => e.target?.value).apply(null, eventArgs)
          );
        }}
        placeholder={"Last Name"}
        value={generateStateValueProp($state, ["lastNameInput", "value"]) ?? ""}
      />

      <Button
        data-plasmic-name={"saveProfileButton"}
        data-plasmic-override={overrides.saveProfileButton}
        className={classNames("__wab_instance", sty.saveProfileButton)}
        color={"green"}
      >
        {"Save Profile"}
      </Button>
      <PlasmicLink__
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(
          projectcss.all,
          projectcss.a,
          projectcss.__wab_text,
          sty.link
        )}
        component={Link}
        href={`/home`}
        platform={"nextjs"}
      >
        {"Lets chat"}
      </PlasmicLink__>
      <div className={classNames(projectcss.all, sty.freeBox__kVrgf)}>
        <div
          className={classNames(projectcss.all, sty.freeBox__q1EIy, {
            [sty.freeBoxisError__q1EIydVchq]: hasVariant(
              $state,
              "isError",
              "isError"
            )
          })}
        >
          {renderPlasmicSlot({
            defaultContents: "Enter some text",
            value: args.errorMessage,
            className: classNames(sty.slotTargetErrorMessage)
          })}
        </div>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "text",
    "uploadAvatar",
    "firstNameInput",
    "lastNameInput",
    "saveProfileButton",
    "link"
  ],
  text: ["text"],
  uploadAvatar: ["uploadAvatar"],
  firstNameInput: ["firstNameInput"],
  lastNameInput: ["lastNameInput"],
  saveProfileButton: ["saveProfileButton"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  text: "div";
  uploadAvatar: typeof UploadAvatar;
  firstNameInput: typeof TextInput;
  lastNameInput: typeof TextInput;
  saveProfileButton: typeof Button;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicUserProfile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicUserProfile__VariantsArgs;
    args?: PlasmicUserProfile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicUserProfile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicUserProfile__ArgsType,
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
          internalArgPropNames: PlasmicUserProfile__ArgProps,
          internalVariantPropNames: PlasmicUserProfile__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicUserProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicUserProfile";
  } else {
    func.displayName = `PlasmicUserProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicUserProfile = Object.assign(
  // Top-level PlasmicUserProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    uploadAvatar: makeNodeComponent("uploadAvatar"),
    firstNameInput: makeNodeComponent("firstNameInput"),
    lastNameInput: makeNodeComponent("lastNameInput"),
    saveProfileButton: makeNodeComponent("saveProfileButton"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicUserProfile
    internalVariantProps: PlasmicUserProfile__VariantProps,
    internalArgProps: PlasmicUserProfile__ArgProps
  }
);

export default PlasmicUserProfile;
/* prettier-ignore-end */
