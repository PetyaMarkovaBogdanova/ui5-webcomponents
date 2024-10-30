import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import type I18nBundle from "@ui5/webcomponents-base/dist/i18nBundle.js";
import Dialog from "@ui5/webcomponents/dist/Dialog.js";
import type { Result, Exception } from "@zxing/library/esm5/index.js";
import type { Interval } from "@ui5/webcomponents-base/dist/types.js";
declare const BrowserMultiFormatReader: typeof import("@zxing/library/esm5/index.js").BrowserMultiFormatReader;
type BarcodeScannerDialogScanSuccessEventDetail = {
    text: string;
    rawBytes: Uint8Array;
};
type BarcodeScannerDialogScanErrorEventDetail = {
    message: string;
};
/**
 * @class
 *
 * ### Overview
 *
 * The `BarcodeScannerDialog` component provides barcode scanning functionality for all devices that support the `MediaDevices.getUserMedia()` native API.
 * Opening the dialog launches the device camera and scans for known barcode formats.
 *
 * A `scanSuccess` event fires whenever a barcode is identified
 * and a `scanError` event fires when the scan failed (for example, due to missing permisions).
 *
 * Internally, the component  uses the zxing-js/library third party OSS.
 *
 * For a list of supported barcode formats, see the [zxing-js/library](https://github.com/zxing-js/library) documentation.
 * @constructor
 * @extends UI5Element
 * @public
 * @since 1.0.0-rc.15
 */
declare class BarcodeScannerDialog extends UI5Element {
    /**
     * Indicates whether the dialog is open.
     *
     * @public
     * @default false
     * @since 1.24.0
     */
    open: boolean;
    /**
     * Indicates whether a loading indicator should be displayed while the scanner is loading.
     * @default false
     * @private
     */
    loading: boolean;
    /**
     * Indicates whether the scanner is ready to scan.
     * @default false
     * @private
     */
    isReadyToScan: boolean;
    dialog?: Dialog;
    static i18nBundle: I18nBundle;
    _codeReader: InstanceType<typeof BrowserMultiFormatReader>;
    _tempCanvas: HTMLCanvasElement;
    _scanInterval: Interval | null;
    _handleVideoPlayingBound: () => void;
    _handleCaptureRegionBound: () => void;
    constructor();
    static onDefine(): Promise<void>;
    onAfterRendering(): Promise<void>;
    onEnterDOM(): void;
    onExitDOM(): void;
    get _open(): boolean;
    get _cancelButtonText(): string;
    get _busyIndicatorText(): string;
    _hasGetUserMedia(): boolean;
    _getUserPermission(): Promise<MediaStream>;
    _getVideoElement(): HTMLVideoElement;
    _getOverlayCanvasElement(): HTMLCanvasElement;
    /**
     * CALCULATIONS
     *
     * The following methods are used to calculate the capture region
     * and draw it on the overlay canvas.
     * The capture region is a square area in the center of the video element
     * where the barcode scanning is performed.
     * The region is defined as a proportion of the video element's dimensions.
     * The overlay canvas is used to draw a semi-transparent black overlay
     * over the video element and a red border around the capture region.
     * The overlay canvas is updated on every frame to ensure the capture region is always visible.
     * The capture region is used to crop the video frame and extract the barcode image.
     * The extracted image is then processed by the zxing-js library to decode the barcode.
     */
    _calculateCaptureRegion(clientWidth: number, clientHeight: number): {
        scanHeight: number;
        scanWidth: number;
        xOffset: number;
        yOffset: number;
    };
    _drawCaptureRegion(): void;
    _getTempCanvasElement(): HTMLCanvasElement;
    _captureFrame(): HTMLCanvasElement;
    /**
     * HANDLERS
     */
    _processFrame(): Promise<void>;
    _handleScanSuccess(result: Result): void;
    _handleScanError(error: Exception): void;
    _handleVideoPlaying(): void;
    _handleDrawCaptureRegion(): void;
    _closeDialog(): void;
    _resetReader(): void;
}
export default BarcodeScannerDialog;
export type { BarcodeScannerDialogScanErrorEventDetail, BarcodeScannerDialogScanSuccessEventDetail, };