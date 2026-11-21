// *texto* se pinta resaltado (<strong>); el resto, tal cual.
export const marks = (text: string) => text.split("*").map((part, k) => (k % 2 ? <strong key={k}>{part}</strong> : part));
