const ASSET = "/images/projects/msm-academy";

export function MSMConstructionGrid() {
  return (
    <div className="msm-grid" aria-label="MSM Dubai logo construction grid">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${ASSET}/eagles.svg`} alt="" className="msm-grid-eagles" />
      <span className="msm-grid-circle msm-grid-circle--left" />
      <span className="msm-grid-circle msm-grid-circle--center" />
      <span className="msm-grid-circle msm-grid-circle--right" />
      <span className="msm-grid-vline msm-grid-vline--1" />
      <span className="msm-grid-vline msm-grid-vline--2" />
      <span className="msm-grid-vline msm-grid-vline--3" />
      <span className="msm-grid-vline msm-grid-vline--4" />
      <span className="msm-grid-hline msm-grid-hline--1" />
      <span className="msm-grid-hline msm-grid-hline--2" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${ASSET}/shield.svg`} alt="" className="msm-grid-shield" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${ASSET}/book.svg`} alt="" className="msm-grid-book" />
      <p className="msm-grid-dubai">Dubai</p>
    </div>
  );
}
