import { GetEntry } from "@/types/contentstack";
import { initializeContentStackSdk } from "./utils";
import { Utils } from "contentstack";

// SDK initialization
const Stack = initializeContentStackSdk();

const renderOption = {
    span: (node: any, next: any) => next(node.children),
  };

export const getEntry = ({
    contentTypeUid,
    referenceFieldPath,
    jsonRtePath,
  }: GetEntry) => {
    return new Promise((resolve, reject) => {
      const query = Stack.ContentType(contentTypeUid).Query();
      if (referenceFieldPath) query.includeReference(referenceFieldPath);
      query
        .toJSON()
        .find()
        .then(
          (result) => {
            jsonRtePath &&
              Utils.jsonToHTML({
                entry: result,
                paths: jsonRtePath,
                renderOption,
              });
            resolve(result);
          },
          (error) => {
            reject(error);
          }
        );
    });
  };
  