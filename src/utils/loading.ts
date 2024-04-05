export function openLoading(text?: string): void {
  uni.showLoading({
    title: text,
    mask: true,
  });
}

export function closeLoading(): void {
  uni.hideLoading();
}
