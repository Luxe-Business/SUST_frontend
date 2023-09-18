import university from "./images/university.jpg";
import Image from "next/image"
export default function About({ content }) {
  return (
    <section>
      <div className='flex flex-wrap'>
        <div className='w-2/5 px-5'>
          <Image
            width={200}
            height={200}
            className='w-full rounded-md'
            src={university}
            alt=""
          />
        </div>
        <div className='w-3/5 px-5 text-xl'>
        {/* {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : 'Loading...'} */}
      </div>
        <div className='w-3/5 px-5 text-xl'>
          <p className='mb-4'>
          
          </p>
          <p>
            تم افتتاح كلية الطب في الجامعة الإسلامية عام 2006 م، وجاء افتتاحها
            بعد فترة مخاض دامت أكثر من عشر سنوات جرى خلالها إعداد البنية التحتية
            اللازمة من حيث استقطاب الكادر التعليمي وإنشاء المختبرات العلمية،
            وغيرها. وفي عام 2016 انتقلت الكلية إلى الحرم الجامعي في المنطقة
            الوسطى حيث تبلغ مساحة الحرم الإجمالية 215000 متر مربع ويحتوي على
            كلية الطب إضافة إلى مستشفى الصداقة التركي-الفلسطيني. وقد خرجت كلية
            الطب بالجامعة الإسلامية بين عامي 2012 و2023 ميلادية 1019 طبيباً
            وطبيبة، كانوا من خيرة الطلبة الذين باتوا قادة العمل الطبي في قطاع
            غزة ولهم بصمات مشهودة في مختلف الدول العربية والأجنبية.
          </p>
        </div>
      </div>
      <p></p>
    </section>
  )
}
