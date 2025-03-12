import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useState } from 'react'
import { LanguageLabel, LanguageType } from '../../enum/language'

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageType>(LanguageType.VI)
  return (
    <div className="pt-2 pb-5 bg-orange text-white">
      <div className="container flex justify-between items-center">
        <div className="flex space-x-4">
          <p>Kênh người bán</p>
          <p>Tải ứng dụng</p>
          <p>Kết nối</p>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
            <p>Thông báo</p>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
            <p>Hỗ trợ</p>
          </div>
          <Select
            value={selectedLanguage}
            onValueChange={(value: LanguageType) => {
              setSelectedLanguage(value)
            }}
          >
            <SelectTrigger className="w-[110px] bg-orange border-none focus:ring-0 focus:ring-offset-0">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={LanguageType.VI}>{LanguageLabel.get(LanguageType.VI)}</SelectItem>
                <SelectItem value={LanguageType.EN}>{LanguageLabel.get(LanguageType.EN)}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
