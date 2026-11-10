import icons from "./icons";

// Renders an inline SVG inside an <i>, so existing `i` styles (font-size,
// color) keep working. Size follows font-size; color follows currentColor.
const Icon = ({ name, className = "", ...rest }) => {
  const [viewBox, d] = icons[name];
  return (
    <i className={`icon ${className}`.trim()} aria-hidden="true" {...rest}>
      <svg viewBox={viewBox} focusable="false">
        <path fill="currentColor" d={d} />
      </svg>
    </i>
  );
};

export default Icon;
