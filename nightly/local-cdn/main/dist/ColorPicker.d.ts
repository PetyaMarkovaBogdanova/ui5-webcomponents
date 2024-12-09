import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import type { IFormInputElement } from "@ui5/webcomponents-base/dist/features/InputElementsFormSupport.js";
import type { ColorRGB } from "@ui5/webcomponents-base/dist/util/ColorConversion.js";
import ColorPickerDisplayMode from "./types/ColorPickerDisplayMode.js";
type ColorCoordinates = {
    x: number;
    y: number;
};
/**
 * @class
 *
 * ### Overview
 * The `ui5-color-picker` allows users to choose any color and provides different input options for selecting colors.
 *
 * ### Usage
 *
 * #### When to use
 * Use the color picker if:
 *
 * -  users need to select any color freely.
 *
 * #### When not to use
 *
 * -  Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.
 *
 * ### ES6 Module Import
 *
 * `import "@ui5/webcomponents/dist/ColorPicker.js";`
 * @constructor
 * @since 1.0.0-rc.12
 * @extends UI5Element
 * @public
 */
declare class ColorPicker extends UI5Element implements IFormInputElement {
    /**
     * Defines the currently selected color of the component.
     *
     * **Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.
     * @default "rgba(255,255,255,1)"
     * @public
     */
    value: string;
    /**
     * Determines the name by which the component will be identified upon submission in an HTML form.
     *
     * **Note:** This property is only applicable within the context of an HTML Form element.
     * @default undefined
     * @public
     * @since 2.0.0
     */
    name?: string;
    /**
     * Defines the display mode of the component.
     * @default "Default"
     * @public
     * @since 2.5.0
     */
    displayMode: `${ColorPickerDisplayMode}`;
    /**
     * Defines the HEX code of the currently selected color
     *
     * **Note**: If Alpha(transperancy) is set it is not included in this property. Use `color` property.
     * @private
     */
    hex: string;
    /**
     * Defines the current main color which is selected via the hue slider and is shown in the main color square.
     * @private
     */
    _mainValue: ColorRGB;
    /**
     * Defines the currenty selected color from the main color section.
     * @private
     */
    _value: ColorRGB;
    /**
     * @private
     */
    _selectedCoordinates: ColorCoordinates;
    /**
     * @private
     */
    _alpha: number;
    /**
     * @private
     */
    _hue: number;
    /**
     * @private
     */
    _isSelectedColorChanged: boolean;
    /**
     * @private
     */
    _isHueValueChanged: boolean;
    /**
     * @private
     */
    _wrongHEX: boolean;
    selectedHue: number;
    mouseDown: boolean;
    mouseIn: boolean;
    static i18nBundle: I18nBundle;
    formElementAnchor(): Promise<HTMLElement | undefined>;
    get formFormattedValue(): string;
    constructor();
    onBeforeRendering(): void;
    _handleMouseDown(e: MouseEvent): void;
    _handleMouseUp(): void;
    _handleMouseOut(e: MouseEvent): void;
    _handleMouseMove(e: MouseEvent): void;
    _handleAlphaInput(e: CustomEvent): void;
    _handleHueInput(e: CustomEvent): void;
    _handleHEXChange(e: CustomEvent | KeyboardEvent): void;
    _handleRGBInputsChange(e: CustomEvent): void;
    _setMainColor(hueValue: number): void;
    _handleAlphaChange(): void;
    _changeSelectedColor(x: number, y: number): void;
    _onkeydown(e: KeyboardEvent): void;
    _calculateColorFromCoordinates(x: number, y: number): {
        h: number;
        s: number;
        l: number;
    } | undefined;
    _setColor(color?: ColorRGB): void;
    isValidRGBColor(color: ColorRGB): boolean;
    _setHex(): void;
    _setValues(): void;
    get hueSliderLabel(): string;
    get alphaSliderLabel(): string;
    get hexInputLabel(): string;
    get redInputLabel(): string;
    get greenInputLabel(): string;
    get blueInputLabel(): string;
    get alphaInputLabel(): string;
    get inputsDisabled(): true | undefined;
    get hexInputErrorState(): "Error" | undefined;
    get _isDefaultPickerMode(): boolean;
    get styles(): {
        mainColor: {
            "background-color": string;
        };
        circle: {
            left: string;
            top: string;
        };
        colorSpan: {
            "background-color": string;
        };
    };
}
export default ColorPicker;