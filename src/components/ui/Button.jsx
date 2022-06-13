import PropTypes from "prop-types";
import "@/assets/style/scss/style.scss";

function buttonRipples(e) {
  e.stopPropagation();
  const el = e.currentTarget;
  const ripples = document.createElement("i");

  el.appendChild(ripples);
  ripples.classList.add("ripples");

  e = e.touches ? e.touches[0] : e;

  const r = el.getBoundingClientRect(),
    d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;

  ripples.style.cssText = `--s: 0; --o: 1;`;
  ripples.offsetTop;
  ripples.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
    e.clientX - r.left
  }; --y:${e.clientY - r.top};`;

  setTimeout(() => {
    ripples.remove();
  }, 600);
}

function Button({ label }) {
  return (
    <div className='btn' onClick={buttonRipples}>
      {label}
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
