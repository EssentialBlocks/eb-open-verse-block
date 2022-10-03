/**
 * WordPress Core Dependencies
 */
import { __ } from "@wordpress/i18n";

// Order By
export const ORDER_BY = [
  { label: __("Product ID", "essential-blocks"), value: "ID" },
  { label: __("Product Title", "essential-blocks"), value: "title" },
  { label: __("Product Slug", "essential-blocks"), value: "slug" },
  { label: __("Price", "essential-blocks"), value: "price" },
  { label: __("Popular", "essential-blocks"), value: "popular" },
  { label: __("Rating", "essential-blocks"), value: "rating" },
  { label: __("Date", "essential-blocks"), value: "date" },
];

// Order
export const ORDER = [
  { label: __("Ascending", "essential-blocks"), value: "asc" },
  { label: __("Descending", "essential-blocks"), value: "desc" },
];
