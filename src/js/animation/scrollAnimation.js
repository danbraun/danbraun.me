import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CSSRulePlugin from "gsap/CSSRulePlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);
const bg = CSSRulePlugin.getRule('header:after')

export function animateBG() {
  gsap.set(bg, {
    'filter': 'grayscale(0%) contrast(100%) blur(0px)',
    'transform': 'scale(1)'
  })
  const bgAnimation = gsap.to(bg, {
    filter: 'grayscale(100%) contrast(200%) blur(5px)',
    transform: 'scale(1.02)',
    scrollTrigger: {
      trigger: 'header',
      scrub: true,
      ease: "none",
      start: "top top",
      pin: 'header',
    }
  })
}
