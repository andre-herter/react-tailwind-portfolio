function Button({ text, svg }) {
  return (
    <div className="flex">
      <a
        href="#projects"
        className="mt-10 lg:mt:12 text-sm lg:text-base font-medium bg-blue-600 hover:bg-blue-500 rounded-lg px-5 py-3 flex items-center justify-center"
      >
        {text}
        {svg}
      </a>
    </div>
  );
}

export default Button;
