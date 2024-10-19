import { type SchemaTypeDefinition } from "sanity";
import { post } from "./blog-schemas/post";
import { tag } from "./blog-schemas/tag";

export const schema: { types: SchemaTypeDefinition[] } = {
     types: [post, tag],
};
