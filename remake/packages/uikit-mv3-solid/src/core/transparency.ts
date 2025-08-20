export default function applyTransparency(color: string, transparency: number): string {
    const baseColor = color.substring(0, 7);

    const clampedTransparency = Math.max(0, Math.min(1, transparency));

    const alpha = Math.round(clampedTransparency * 255);

    const hexAlpha = alpha.toString(16).padStart(2, "0");

    return `${baseColor}${hexAlpha}`;
}
