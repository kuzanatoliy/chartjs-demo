export type TNavigationStrategy = {
  refreshMeta: () => void;
  goEnd: () => void;
  goNext: () => void;
  goNextDataSet: () => void;
  goPrevious: () => void;
  goPreviousDataSet: () => void;
  goHome: () => void;
  hide: () => void;
  display: () => void;
};
