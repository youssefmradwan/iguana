/**
 * Photography catalogue — every photo on the site is listed here once.
 *
 * Files live in /public/images/projects/ (full size, max 1920px) with a
 * 900px-wide copy in /public/images/projects/sm/ used on small screens.
 *
 * To add a photo: drop both sizes into those folders, then add a line below
 * with its pixel size and a short description of what it shows (alt text).
 */
import type { Image } from "./types";

function photo(name: string, width: number, height: number, alt: string): Image {
  return { src: `/images/projects/${name}.jpg`, width, height, alt };
}

export const photos = {
  "brand-01": photo("brand-01", 1230, 1161, "Black-and-white close-up of a craftsman's hands shaping timber at a machine"),
  "doors-01": photo("doors-01", 1303, 1620, "Tall timber-slatted pivot door standing open in a stone-clad entrance"),
  "doors-02": photo("doors-02", 1298, 1620, "Vertical timber-slat entrance door beside a grey stone wall"),
  "doors-03": photo("doors-03", 1298, 1620, "Honey-toned timber entrance door framed by plants on a terracotta façade"),
  "doors-04": photo("doors-04", 1298, 1620, "Timber entrance door beneath a slatted timber canopy"),
  "doors-05": photo("doors-05", 1161, 1620, "Horizontal-plank timber entrance door beside tropical planting"),
  "doors-06": photo("doors-06", 1219, 1620, "Close view of a horizontal-plank walnut door and its frame"),
  "dorra-01": photo("dorra-01", 1037, 908, "Reception lounge with a circular slatted-timber ceiling feature and walnut wall panels"),
  "dorra-02": photo("dorra-02", 1043, 909, "Walnut reception desk with a marble end panel"),
  "dorra-03": photo("dorra-03", 1037, 895, "Waiting area with walnut wall cladding and a grey sofa"),
  "dorra-04": photo("dorra-04", 1049, 898, "Walnut-panelled wall with flush integrated doors behind a leather sofa"),
  "excel-01": photo("excel-01", 771, 759, "Corridor lined with full-height walnut panels and flush doors"),
  "excel-02": photo("excel-02", 771, 757, "Reception with a marble counter framed in walnut panelling"),
  "excel-03": photo("excel-03", 771, 759, "Boardroom with a long timber table and walnut wall panelling"),
  "heliopolis-01": photo("heliopolis-01", 1434, 957, "Living and dining room with a timber dining table and cove lighting"),
  "heliopolis-02": photo("heliopolis-02", 1024, 684, "Living room with a walnut media unit and the dining area beyond"),
  "heliopolis-03": photo("heliopolis-03", 1024, 684, "Close view of a walnut sideboard with brass handles"),
  "heliopolis-04": photo("heliopolis-04", 1024, 684, "Dining area with a walnut sideboard and timber table"),
  "heliopolis-05": photo("heliopolis-05", 1639, 1094, "Kitchen with pale timber cabinets and a speckled stone splashback"),
  "heliopolis-06": photo("heliopolis-06", 684, 1024, "Walnut wardrobe with glass doors and internal drawers"),
  "holidayinn-01": photo("holidayinn-01", 1152, 774, "Restaurant terrace with a timber-slatted ceiling overlooking the water"),
  "holidayinn-02": photo("holidayinn-02", 1133, 685, "Rooftop pool terrace at dusk"),
  "lexies-01": photo("lexies-01", 1290, 1286, "Restaurant with faceted timber and brass wall panels above dining tables"),
  "lexies-02": photo("lexies-02", 1262, 1286, "Marble fireplace wall framed by faceted timber panels"),
  "luxoft-01": photo("luxoft-01", 1179, 785, "Reception with a white desk, Luxoft signage and pale timber flooring"),
  "luxoft-02": photo("luxoft-02", 1920, 1280, "Reception lounge with sofas and illuminated wall graphics"),
  "luxoft-03": photo("luxoft-03", 944, 621, "Corridor with teal cabinetry and a planted breakout area"),
  "luxoft-04": photo("luxoft-04", 960, 640, "Timber locker wall along an office corridor with planters"),
  "luxoft-05": photo("luxoft-05", 1024, 683, "Kitchenette with teal cabinets beside a timber-framed opening"),
  "luxoft-06": photo("luxoft-06", 1920, 1280, "Office corridor with timber-framed glass partitions"),
  "luxoft-07": photo("luxoft-07", 1920, 1280, "Open-plan workspace with green desk screens"),
  "luxoft-08": photo("luxoft-08", 1920, 1280, "Open-plan desks beneath exposed ceiling services"),
  "luxoft-09": photo("luxoft-09", 1156, 756, "Meeting room with a timber table and slatted ceiling feature"),
  "luxoft-10": photo("luxoft-10", 1920, 1280, "Meeting room with a purple feature wall and round table"),
  "luxoft-11": photo("luxoft-11", 1200, 800, "Staff café with timber flooring and a teal ceiling feature"),
  "luxoft-12": photo("luxoft-12", 1920, 1280, "Bright café seating area under a teal ceiling feature"),
  "luxoft-13": photo("luxoft-13", 1920, 1280, "Lounge with a timber-slatted screen and planter"),
  "luxoft-14": photo("luxoft-14", 1680, 1120, "Corridor with timber wall panels and colourful artwork"),
  "luxoft-15": photo("luxoft-15", 1920, 1280, "Timber-framed openings beside colourful wall graphics"),
  "nbe-01": photo("nbe-01", 1280, 960, "Bank hall with timber-faced teller counters"),
  "nbe-02": photo("nbe-02", 640, 480, "National Bank of Egypt branch entrance façade"),
  "nbe-03": photo("nbe-03", 1280, 960, "Bank customer area with timber counters and glass partitions"),
  "nbe-04": photo("nbe-04", 874, 800, "Frosted-glass entrance doors with a patterned manifestation in a red frame"),
  "qorrect-01": photo("qorrect-01", 1280, 960, "Open workspace with timber desks and window blinds"),
  "qorrect-02": photo("qorrect-02", 874, 896, "Long corridor with timber-clad walls and glass office fronts"),
  "qorrect-03": photo("qorrect-03", 896, 672, "Open-plan office with white desks and timber-framed glazing"),
  "qorrect-04": photo("qorrect-04", 858, 809, "Glass-walled office with a timber desk and mesh chairs"),
  "section-01": photo("section-01", 1284, 1269, "Reception with a slatted walnut screen and marble-topped desk"),
  "section-02": photo("section-02", 1229, 821, "Walnut built-in wardrobe with glass-fronted doors"),
  "section-03": photo("section-03", 960, 640, "Restaurant seating under a timber pergola ceiling"),
  "zayed-01": photo("zayed-01", 1435, 1076, "Stair hall with a vertical timber-slat balustrade screen"),
  "zayed-02": photo("zayed-02", 615, 820, "Timber-lined staircase with warm lighting"),
  "zayed-03": photo("zayed-03", 615, 820, "Vertical timber slats screening a planted light well"),
} satisfies Record<string, Image>;

export type PhotoName = keyof typeof photos;

export const logo = {
  /** Full logo (mark + wordmark) on the brand walnut background. */
  full: "/brand/oakland-logo.jpg",
  /** Transparent cream PNGs, for placing over photos or dark backgrounds. */
  mark: "/brand/oakland-mark.png",
  wordmark: "/brand/oakland-wordmark.png",
};
