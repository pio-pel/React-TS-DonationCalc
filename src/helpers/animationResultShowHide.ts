export function animationResultShowHide(setIsHidTrue: (value: boolean) => void) {
    setIsHidTrue(false);
    setTimeout(() => {
      setIsHidTrue(true);
    }, 1);
    window.scrollTo(0, document.body.scrollHeight);
}