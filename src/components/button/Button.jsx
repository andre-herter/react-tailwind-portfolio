function Button({ text, svg, href, className, target }) {
  return (
    <div className="flex">
      <a href={href} className={className} target={target}>
        {text}
        {svg}
      </a>
    </div>
  );
}

export default Button;
