
export function isMention(state) {
  let parentText = state.selection.$from.parent.textContent;
  let parentOffset = state.selection.$from.parentOffset;
  let previous = parentText[parentOffset-1] || ' ';
  let next = parentText[parentOffset] || ' ';

  return previous === ' ' && next === ' ';
}
