// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: xc4oHLU6bxB8LcxYsqWiRJ
// Component: RbL4XTZzLpk6

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

import TextInput from "../../TextInput"; // plasmic-import: FeO9F9kqLFEu/component
import Button from "../../Button"; // plasmic-import: 52M_F0RpAHXe/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: xc4oHLU6bxB8LcxYsqWiRJ/projectcss
import sty from "./PlasmicAuthForm.module.css"; // plasmic-import: RbL4XTZzLpk6/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: kbzAdglyU59e/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: b3FhWjF3yC4U/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: c0CcLIFV2w9Y/icon

createPlasmicElementProxy;

export type PlasmicAuthForm__VariantMembers = {
  mode: "signIn" | "signUp" | "checkEmail";
};
export type PlasmicAuthForm__VariantsArgs = {
  mode?: SingleChoiceArg<"signIn" | "signUp" | "checkEmail">;
};
type VariantPropType = keyof PlasmicAuthForm__VariantsArgs;
export const PlasmicAuthForm__VariantProps = new Array<VariantPropType>("mode");

export type PlasmicAuthForm__ArgsType = {
  handleSubmit?: (mode: string, credentials: string) => void;
};
type ArgPropType = keyof PlasmicAuthForm__ArgsType;
export const PlasmicAuthForm__ArgProps = new Array<ArgPropType>("handleSubmit");

export type PlasmicAuthForm__OverridesType = {
  credentialForm?: Flex__<"div">;
  h3?: Flex__<"h3">;
  inputSection?: Flex__<"div">;
  emailFormField?: Flex__<"div">;
  emailInput?: Flex__<typeof TextInput>;
  passwordFormField?: Flex__<"div">;
  passwordInput?: Flex__<typeof TextInput>;
  actionSection?: Flex__<"div">;
  submitButton?: Flex__<typeof Button>;
};

export interface DefaultAuthFormProps {
  handleSubmit?: (mode: string, credentials: string) => void;
  mode?: SingleChoiceArg<"signIn" | "signUp" | "checkEmail">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuthForm__RenderFunc(props: {
  variants: PlasmicAuthForm__VariantsArgs;
  args: PlasmicAuthForm__ArgsType;
  overrides: PlasmicAuthForm__OverridesType;
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
        path: "emailInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "passwordInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "mode",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.mode
      },
      {
        path: "currentMode",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "SignIn"
      },
      {
        path: "credentialsForm",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return {
                email: $state.emailInput.value,
                password: $state.passwordInput.value
              };
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return [];
              }
              throw e;
            }
          })()
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
    <div
      data-plasmic-name={"credentialForm"}
      data-plasmic-override={overrides.credentialForm}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.credentialForm,
        {
          [sty.credentialFormmode_checkEmail]: hasVariant(
            $state,
            "mode",
            "checkEmail"
          )
        }
      )}
    >
      <h3
        data-plasmic-name={"h3"}
        data-plasmic-override={overrides.h3}
        className={classNames(
          projectcss.all,
          projectcss.h3,
          projectcss.__wab_text,
          sty.h3,
          { [sty.h3mode_checkEmail]: hasVariant($state, "mode", "checkEmail") }
        )}
      >
        {"App Login"}
      </h3>
      <div
        data-plasmic-name={"inputSection"}
        data-plasmic-override={overrides.inputSection}
        className={classNames(projectcss.all, sty.inputSection, {
          [sty.inputSectionmode_checkEmail]: hasVariant(
            $state,
            "mode",
            "checkEmail"
          )
        })}
      >
        <div
          data-plasmic-name={"emailFormField"}
          data-plasmic-override={overrides.emailFormField}
          className={classNames(projectcss.all, sty.emailFormField)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ifo6W
            )}
          >
            {"Email"}
          </div>
          <TextInput
            data-plasmic-name={"emailInput"}
            data-plasmic-override={overrides.emailInput}
            className={classNames("__wab_instance", sty.emailInput)}
            onChange={(...eventArgs) => {
              generateStateOnChangeProp($state, ["emailInput", "value"])(
                (e => e.target?.value).apply(null, eventArgs)
              );
            }}
            placeholder={"you@example.com"}
            type={"email"}
            value={
              generateStateValueProp($state, ["emailInput", "value"]) ?? ""
            }
          />
        </div>
        <div
          data-plasmic-name={"passwordFormField"}
          data-plasmic-override={overrides.passwordFormField}
          className={classNames(projectcss.all, sty.passwordFormField)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gar4
            )}
          >
            {"Password"}
          </div>
          <TextInput
            data-plasmic-name={"passwordInput"}
            data-plasmic-override={overrides.passwordInput}
            className={classNames("__wab_instance", sty.passwordInput)}
            onChange={(...eventArgs) => {
              generateStateOnChangeProp($state, ["passwordInput", "value"])(
                (e => e.target?.value).apply(null, eventArgs)
              );
            }}
            placeholder={"******"}
            type={"password"}
            value={
              generateStateValueProp($state, ["passwordInput", "value"]) ?? ""
            }
          />
        </div>
      </div>
      <div
        data-plasmic-name={"actionSection"}
        data-plasmic-override={overrides.actionSection}
        className={classNames(projectcss.all, sty.actionSection, {
          [sty.actionSectionmode_checkEmail]: hasVariant(
            $state,
            "mode",
            "checkEmail"
          )
        })}
      >
        <Button
          data-plasmic-name={"submitButton"}
          data-plasmic-override={overrides.submitButton}
          className={classNames("__wab_instance", sty.submitButton, {
            [sty.submitButtonmode_signUp]: hasVariant($state, "mode", "signUp")
          })}
          color={"blue"}
          onClick={async event => {
            const $steps = {};

            $steps["runHandleSubmit"] = true
              ? (() => {
                  const actionArgs = {
                    eventRef: $props["handleSubmit"],
                    args: [
                      (() => {
                        try {
                          return $state.currentMode;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })(),
                      (() => {
                        try {
                          return $state.credentialsForm;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return undefined;
                          }
                          throw e;
                        }
                      })()
                    ]
                  };
                  return (({ eventRef, args }) => {
                    return eventRef?.(...(args ?? []));
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["runHandleSubmit"] != null &&
              typeof $steps["runHandleSubmit"] === "object" &&
              typeof $steps["runHandleSubmit"].then === "function"
            ) {
              $steps["runHandleSubmit"] = await $steps["runHandleSubmit"];
            }

            $steps["updateCurrentMode"] =
              $state.currentMode === "signUp"
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["currentMode"]
                      },
                      operation: 0,
                      value: "checkEmail"
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
            if (
              $steps["updateCurrentMode"] != null &&
              typeof $steps["updateCurrentMode"] === "object" &&
              typeof $steps["updateCurrentMode"].then === "function"
            ) {
              $steps["updateCurrentMode"] = await $steps["updateCurrentMode"];
            }
          }}
        >
          {hasVariant($state, "mode", "signUp") ? "Sign Up" : "Sign In"}
        </Button>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wpu2Z,
            {
              [sty.textmode_signUp__wpu2Zg0DYb]: hasVariant(
                $state,
                "mode",
                "signUp"
              )
            }
          )}
          onClick={async event => {
            const $steps = {};

            $steps["updateMode"] = true
              ? (() => {
                  const actionArgs = {
                    variable: {
                      objRoot: $state,
                      variablePath: ["mode"]
                    },
                    operation: 0,
                    value:
                      $state.currentMode === "signIn"
                        ? "signUp"
                        : $state.currentMode === "signUp"
                        ? "signIn"
                        : "checkEmail"
                  };
                  return (({ variable, value, startIndex, deleteCount }) => {
                    if (!variable) {
                      return;
                    }
                    const { objRoot, variablePath } = variable;

                    $stateSet(objRoot, variablePath, value);
                    return value;
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["updateMode"] != null &&
              typeof $steps["updateMode"] === "object" &&
              typeof $steps["updateMode"].then === "function"
            ) {
              $steps["updateMode"] = await $steps["updateMode"];
            }
          }}
        >
          {hasVariant($state, "mode", "signUp")
            ? "Already have an account? Sign In now!"
            : "Don't have an account? Sign Up now!"}
        </div>
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___2R8OK,
          {
            [sty.textmode_checkEmail___2R8OKJsldF]: hasVariant(
              $state,
              "mode",
              "checkEmail"
            )
          }
        )}
      >
        {"Check email"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  credentialForm: [
    "credentialForm",
    "h3",
    "inputSection",
    "emailFormField",
    "emailInput",
    "passwordFormField",
    "passwordInput",
    "actionSection",
    "submitButton"
  ],
  h3: ["h3"],
  inputSection: [
    "inputSection",
    "emailFormField",
    "emailInput",
    "passwordFormField",
    "passwordInput"
  ],
  emailFormField: ["emailFormField", "emailInput"],
  emailInput: ["emailInput"],
  passwordFormField: ["passwordFormField", "passwordInput"],
  passwordInput: ["passwordInput"],
  actionSection: ["actionSection", "submitButton"],
  submitButton: ["submitButton"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  credentialForm: "div";
  h3: "h3";
  inputSection: "div";
  emailFormField: "div";
  emailInput: typeof TextInput;
  passwordFormField: "div";
  passwordInput: typeof TextInput;
  actionSection: "div";
  submitButton: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthForm__VariantsArgs;
    args?: PlasmicAuthForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuthForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuthForm__ArgsType,
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
          internalArgPropNames: PlasmicAuthForm__ArgProps,
          internalVariantPropNames: PlasmicAuthForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuthForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "credentialForm") {
    func.displayName = "PlasmicAuthForm";
  } else {
    func.displayName = `PlasmicAuthForm.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthForm = Object.assign(
  // Top-level PlasmicAuthForm renders the root element
  makeNodeComponent("credentialForm"),
  {
    // Helper components rendering sub-elements
    h3: makeNodeComponent("h3"),
    inputSection: makeNodeComponent("inputSection"),
    emailFormField: makeNodeComponent("emailFormField"),
    emailInput: makeNodeComponent("emailInput"),
    passwordFormField: makeNodeComponent("passwordFormField"),
    passwordInput: makeNodeComponent("passwordInput"),
    actionSection: makeNodeComponent("actionSection"),
    submitButton: makeNodeComponent("submitButton"),

    // Metadata about props expected for PlasmicAuthForm
    internalVariantProps: PlasmicAuthForm__VariantProps,
    internalArgProps: PlasmicAuthForm__ArgProps
  }
);

export default PlasmicAuthForm;
/* prettier-ignore-end */
