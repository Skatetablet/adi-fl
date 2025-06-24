'use client';
import { useState, useEffect } from 'react';

export default function HomePage() {
  // Carousel state
  const reviews = [
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'John D.',
      text: 'Super easy to use and very informative. Highly recommend for anyone needing the ADI course!',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Maria S.',
      text: 'Great customer support and the course was very clear. I finished it in one weekend!',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
      name: 'Alex P.',
      text: 'Very convenient and affordable. I liked being able to do it at my own pace.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Samantha R.',
      text: 'The lessons were clear and easy to follow. I appreciated the flexibility.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
      name: 'Carlos M.',
      text: 'Excellent experience! The site was easy to navigate and the support team was helpful.',
    },
  ];
  const [startIdx, setStartIdx] = useState(0);
  const visibleReviews = reviews.slice(startIdx, startIdx + 3);
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + 3 < reviews.length;

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx((prev) => {
        if (prev + 3 >= reviews.length) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <>
      <main className='min-h-screen bg-blue-950 text-white font-sans'>
        {/* Header */}
        <header className='flex justify-between items-center px-6 py-4 bg-blue-950 text-white'>
          <div className='flex items-center gap-2'>
            <img
              src='/niselogo.png'
              alt='Logo'
              className='h-26 w-26 object-contain mr-2'
            />
          </div>
          <button className='bg-orange-400 text-blue-950 font-semibold px-4 py-2 rounded hover:bg-orange-300'>
            <a
              href='https://lms.ntsi.com/registration/NiSE-FLOL-ADI'
              target='_blank'
              rel='noopener noreferrer'>
              Enroll Now!
            </a>
          </button>
        </header>

        {/* Hero */}
        <section className='text-center py-24 px-4 bg-blue-950'>
          <h1 className='text-4xl md:text-5xl font-bold text-cyan-400 mb-4'>
            Florida Online Advanced Driver Improvement Course by the National
            Institute for Safety and Education
          </h1>
          <p className='text-lg md:text-xl text-white max-w-xl mx-auto mb-8'>
            Learn online with NiSE's trusted ADI course — easy, fast, and
            court-approved.
          </p>
          <button className='bg-orange-400 text-blue-950 font-bold px-6 py-3 rounded hover:bg-orange-300'>
            <a
              href='https://lms.ntsi.com/registration/NiSE-FLOL-ADI'
              target='_blank'
              rel='noopener noreferrer'>
              Get Started
            </a>
          </button>
        </section>

        {/* NiSE ADi Information Section */}
        <section className='bg-blue-950 py-20 px-6'>
          <div className='max-w-5xl mx-auto space-y-12'>
            <div>
              <h2 className='text-2xl font-semibold text-cyan-400 mb-2'>
                Simple, Secure, Savings
              </h2>
              <p className='text-white'>
                Registration and payment for the NiSE BDI course is simple and
                secure because you shouldn't have to jump through hoops to get
                right to learning. Our course is affordable and completion may
                earn you a discount on your insurance premium or the civil
                penalty for a non-criminal moving violation.
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-semibold text-cyan-400 mb-2'>
                Classroom Quality Education, Online Convenience
              </h2>
              <p className='text-white'>
                The NiSE BDI course is designed to provide you with top-tier
                defensive driving education in the convenience of your own
                home—or anywhere you have internet access. Our course is
                compatible with all modern browsers on PCs, tablets, and
                smartphones. Your progress is saved automatically, so log in and
                out as often as you need. Start on one device, continue on
                another. Complete it at your pace, on your schedule.
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-semibold text-cyan-400 mb-2'>
                Who Should Take the NiSE Basic Driver Improvement Course?
              </h2>
              <p className='text-white mb-2'>
                Florida drivers who do not hold a commercial driver's license
                can benefit from our BDI course. Successful completion may earn
                you a discount on your vehicle insurance premium. If you've been
                cited for a non-criminal moving violation and haven't elected to
                complete a BDI course in the last 12 months, this course lets
                you avoid points on your license and get an 18% civil penalty
                reduction.
              </p>
            </div>

            <div>
              <h2 className='text-2xl font-semibold text-cyan-400 mb-2'>
                Eligibility
              </h2>
              <ul className='list-disc list-inside text-white space-y-1'>
                <li>
                  You received a citation for a non-criminal moving violation.
                </li>
                <li>You do not hold a commercial driver's license (CDL).</li>
                <li>
                  You have not completed a BDI course for points dismissal
                  within the past 12 months.
                </li>
              </ul>
              <p className='text-white mt-4 font-semibold'>Additional notes:</p>
              <ul className='list-disc list-inside text-white space-y-1'>
                <li>
                  You may only complete a BDI course for points dismissal 5
                  times in your lifetime.
                </li>
                <li>
                  Within 30 days of the citation date, inform the court clerk in
                  the issuing county.
                </li>
                <li>
                  You must pay an election fee to the court clerk where the
                  citation was issued.
                </li>
                <li>
                  Your completion will be reported to FLHSMV, but you must also
                  notify the county clerk.†
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Google Reviews Carousel */}
        <section className='max-w-3xl mx-auto p-5'>
          <h3 className='text-2xl font-bold text-cyan-400 mb-6 text-center'>
            Google Reviews
          </h3>
          <div className='flex items-center justify-center gap-2'>
            <button
              onClick={() => setStartIdx(startIdx - 1)}
              disabled={!canGoLeft}
              className={`p-2 rounded-full bg-blue-900 text-cyan-400 hover:bg-blue-800 disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label='Previous reviews'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 19l-7-7 7-7'
                />
              </svg>
            </button>
            <div className='grid md:grid-cols-3 gap-6'>
              {visibleReviews.map((review, idx) => (
                <div
                  key={idx}
                  className='bg-blue-900 rounded-lg p-5 shadow-md flex flex-col items-center'>
                  <img
                    src={review.avatar}
                    alt='User'
                    className='w-14 h-14 rounded-full mb-2'
                  />
                  <span className='font-semibold text-white'>
                    {review.name}
                  </span>
                  <div className='flex my-1'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className='w-4 h-4 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-cyan-100 text-sm text-center mt-2'>
                    "{review.text}"
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setStartIdx(startIdx + 1)}
              disabled={!canGoRight}
              className={`p-2 rounded-full bg-blue-900 text-cyan-400 hover:bg-blue-800 disabled:opacity-30 disabled:cursor-not-allowed`}
              aria-label='Next reviews'>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </section>
      </main>
      <footer className='border-t border-blue-400 bg-blue-950 py-6'>
        <div className='flex items-center justify-between max-w-5xl mx-auto px-4'>
          <img
            src='/niselogo.png'
            alt='Logo'
            className='h-13 w-13 object-contain'
          />
          <p className='text-white text-md text-right'>
            © 2024 NiSE. All Rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
