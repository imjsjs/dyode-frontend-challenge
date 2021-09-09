function matchMediaBreakpoint() {
    console.log('evaluated');
    if (window.matchMedia("(min-width: 992px)").matches) {
        return 25;
    } else {
        return 50;
    }
}

export default matchMediaBreakpoint