import { getEntry } from "@/contentstack-sdk";
import { NavbarProps } from "@/types/layout";

export const getNavRes = async (): Promise<NavbarProps> => {
  const response = (await getEntry({
    contentTypeUid: "navbar",
    referenceFieldPath: undefined,
    jsonRtePath: undefined
  })) as NavbarProps[][];
  return response[0][0];
};

export const getAllEntries = async (): Promise<any[]> => {
    const response = (await getEntry({
      contentTypeUid: "page",
      referenceFieldPath: undefined,
      jsonRtePath: undefined,
    })) as any[][];
    return response[0];
  };

  export const getFooterRes = async (): Promise<any> => {
    const response = (await getEntry({
      contentTypeUid: "footer",
      referenceFieldPath: undefined,
      jsonRtePath: undefined
    })) as any[][];
    return response[0][0];
  };
  