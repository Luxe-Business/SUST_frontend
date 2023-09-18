export default function Vision({content}) {
  return (
    <div className=''>
      <div className='text-xl'>
      {/* <div className='mb-4'>
        {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : 'Loading...'}
        </div> */}
        <div className='mb-4'>
          <h2 className='mb-3 text-3xl underline'>الرؤية:</h2>
          <p>
            تطمح الكلية أن تكون الرائدة على مستوى البرامج والخدمات التعليمية
            والصحية والاستشارية التي تقدمها للمجتمع الفلسطيني.
          </p>
        </div>
        <div className='mb-4'>
          <h2 className='mb-3 text-3xl underline'>الرسالة:</h2>
          <p>
            كلية الطب مؤسسة أكاديمية صحية تسعى للنهوض بالمستوى العلمي والصحي
            والحضاري للمجتمع والعمل على مواكبة التطور التكنولوجي والاتجاهات
            الحديثة في العلاج والتعليم الصحي وتشجيع البحث العلمي في علوم الطب
            وتساهم في خدمة المجتمع.
          </p>
        </div>
      </div>
    </div>
  )
}
