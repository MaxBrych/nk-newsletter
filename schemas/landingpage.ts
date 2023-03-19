import { defineField, defineType } from "sanity";

export default defineType({
  name: "landingpage",
  title: "Landingpage",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "cta",
      title: "CTA",
      type: "text",
    }),
  ],
});
