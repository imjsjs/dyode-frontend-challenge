function matchMobileBreakpoint() {
    if (window.matchMedia("(min-width: 992px)").matches) {
        return true;
    } else {
        return false;
    }
}

export default matchMobileBreakpoint