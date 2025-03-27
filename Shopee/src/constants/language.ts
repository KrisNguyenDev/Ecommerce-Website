export enum LanguageType {
  VI = 'Vi',
  EN = 'En',
}

export const LanguageLabel = new Map<LanguageType, string>([
  [LanguageType.VI, 'Tiếng Việt'],
  [LanguageType.EN, 'Tiếng Anh'],
])
