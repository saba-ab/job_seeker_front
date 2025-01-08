import { Categories } from 'enums/categories';

export const CategoryNames: Record<Categories, string> = {
  [Categories.ADMINISTRATION_MANAGEMENT]: 'ადმინისტრაცია/მენეჯმენტი',
  [Categories.SALES]: 'გაყიდვები',
  [Categories.FINANCE_STATISTICS]: 'ფინანსები/სტატისტიკა',
  [Categories.PR_MARKETING]: 'PR/მარკეტინგი',
  [Categories.LOGISTICS_TRANSPORT_DISTRIBUTION]:
    'ლოჯისტიკა/ტრანსპორტი/დისტრიბუცია',
  [Categories.IT_PROGRAMMING]: 'IT/პროგრამირება',
  [Categories.LEGAL]: 'სამართალი',
  [Categories.MEDICINE_PHARMACY]: 'მედიცინა/ფარმაცია',
  [Categories.OTHER]: 'სხვა',
  [Categories.FOOD]: 'კვება',
  [Categories.CONSTRUCTION_REPAIR]: 'მშენებლობა/რემონტი',
  [Categories.EDUCATION]: 'განათლება',
  [Categories.MEDIA_PUBLISHING]: 'მედია/გამომცემლობა',
  [Categories.BEAUTY_FASHION]: 'სილამაზე/მოდა',
  [Categories.CLEANING]: 'დასუფთავება',
  [Categories.SECURITY]: 'დაცვა/უსაფრთხოება',
  [Categories.TECHNICAL_PERSONNEL]: 'ზოგადი ტექნიკური პერსონალი'
};
