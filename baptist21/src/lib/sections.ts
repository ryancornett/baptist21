import { Section } from './types'

export const sections: Record<number, Section> = {
    1: { id: 1, title: "God, the Bible, Creation", icon: "/assets/img/icons/section1.webp", sectionStart: 1, sectionEnd: 16 },
    2: { id: 2, title: "Sin", icon: "/assets/img/icons/section2.webp", sectionStart: 17, sectionEnd: 23 },
    3: { id: 3, title: "Redemption, Christ", icon: "/assets/img/icons/section3.webp", sectionStart: 24, sectionEnd: 32 },
    4: { id: 4, title: "The Holy Spirit, Salvation, Sanctification", icon: "/assets/img/icons/section4.webp", sectionStart: 33, sectionEnd: 41 },
    5: { id: 5, title: "Judgment, Obedience", icon: "/assets/img/icons/section5.webp", sectionStart: 42, sectionEnd: 45 },
    6: { id: 6, title: "The Ten Commandments", icon: "/assets/img/icons/section6.webp", sectionStart: 46, sectionEnd: 87 },
    7: { id: 7, title: "Morality, the Curse, Faith", icon: "/assets/img/icons/section7.webp", sectionStart: 88, sectionEnd: 92 },
    8: { id: 8, title: "Spiritual Disciplines, the Church", icon: "/assets/img/icons/section8.webp", sectionStart: 93, sectionEnd: 105 },
    9: { id: 9, title: "The Lord's Prayer", icon: "/assets/img/icons/section9.webp", sectionStart: 106, sectionEnd: 114 }
}

export const getSectionByQuestionNumber = (questionNumber: number): Section | undefined => {
    return Object.values(sections).find(
      (section) =>
        questionNumber >= section.sectionStart && questionNumber <= section.sectionEnd
    )
}
  
  // const section = getSectionByQuestionNumber(catechismItem.number)
