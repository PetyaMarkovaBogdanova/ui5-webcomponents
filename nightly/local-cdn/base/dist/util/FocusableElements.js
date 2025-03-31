import isElementHidden from "./isElementHidden.js";
import isElementClickable from "./isElementClickable.js";
import { instanceOfUI5Element } from "../UI5Element.js";
import { isSafari } from "../Device.js";
const isFocusTrap = (el) => {
    return el.hasAttribute("data-ui5-focus-trap");
};
const isScrollable = (el) => {
    const computedStyle = getComputedStyle(el);
    return (el.scrollHeight > el.clientHeight && ["scroll", "auto"].indexOf(computedStyle.overflowY) >= 0)
        || (el.scrollWidth > el.clientWidth && ["scroll", "auto"].indexOf(computedStyle.overflowX) >= 0);
};
const getFirstFocusableElement = async (container, startFromContainer) => {
    if (!container || isElementHidden(container)) {
        return null;
    }
    return findFocusableElement(container, true, startFromContainer);
};
const getLastFocusableElement = async (container, startFromContainer) => {
    if (!container || isElementHidden(container)) {
        return null;
    }
    return findFocusableElement(container, false, startFromContainer);
};
const isElemFocusable = (el) => {
    return el.hasAttribute("data-ui5-focus-redirect") || !isElementHidden(el);
};
const isUI5ElementWithNegativeTabIndex = (el) => {
    if (instanceOfUI5Element(el)) {
        const tabIndex = el.getAttribute("tabindex");
        if (tabIndex !== null && parseInt(tabIndex) < 0) {
            return true;
        }
    }
    return false;
};
const findFocusableElement = async (container, forward, startFromContainer) => {
    let child;
    let assignedElements;
    let currentIndex = -1;
    if (container.shadowRoot) {
        child = forward ? container.shadowRoot.firstChild : container.shadowRoot.lastChild;
    }
    else if (container instanceof HTMLSlotElement && container.assignedNodes()) {
        assignedElements = container.assignedNodes();
        currentIndex = forward ? 0 : assignedElements.length - 1;
        child = assignedElements[currentIndex];
    }
    else if (startFromContainer) {
        child = container;
    }
    else {
        child = forward ? container.firstElementChild : container.lastElementChild;
    }
    let focusableDescendant;
    /* eslint-disable no-await-in-loop */
    while (child) {
        const originalChild = child;
        if (!isElementHidden(originalChild) && !isUI5ElementWithNegativeTabIndex(originalChild)) {
            if (instanceOfUI5Element(child)) {
                // getDomRef is used because some components mark their focusable ref in an inner
                // html but there might also be focusable targets outside of it
                // as an example - TreeItemBase
                // div - root of the component returned by getDomRef()
                // 	li.ui5-li-tree - returned by getFocusDomRef() and may not be focusable (ItemNavigation manages tabindex)
                // 	ul.subtree - may still contain focusable targets (sub nodes of the tree item)
                await child._waitForDomRef();
                child = child.getDomRef();
            }
            if (!child || isElementHidden(child)) {
                return null;
            }
            if (child.nodeType === 1 && isElemFocusable(child) && !isFocusTrap(child)) {
                if (isElementClickable(child)) {
                    return (child && typeof child.focus === "function") ? child : null;
                }
                focusableDescendant = await findFocusableElement(child, forward);
                // check if it is a keyboard focusable scroll container
                if (!isSafari() && !focusableDescendant && isScrollable(child)) {
                    return (child && typeof child.focus === "function") ? child : null;
                }
                if (focusableDescendant) {
                    return (focusableDescendant && typeof focusableDescendant.focus === "function") ? focusableDescendant : null;
                }
            }
        }
        child = forward ? originalChild.nextSibling : originalChild.previousSibling;
        // If the child element is not part of the currently assigned element,
        // we have to check the next/previous element assigned to the slot or continue with the next/previous sibling of the slot,
        // otherwise, the nextSibling/previousSibling is the next element inside the light DOM
        if (assignedElements && !assignedElements[currentIndex].contains(child)) {
            currentIndex = forward ? currentIndex + 1 : currentIndex - 1;
            child = assignedElements[currentIndex];
        }
    }
    /* eslint-enable no-await-in-loop */
    return null;
};
export { getFirstFocusableElement, getLastFocusableElement, };
//# sourceMappingURL=FocusableElements.js.map