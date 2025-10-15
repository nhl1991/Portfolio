export default function DisplayGreet() {
  return (
      <div className="p-2 flex flex-col gap-2">
      <h1 id="intro_1" className="text-gradient">
        こんにちは。
      </h1>
      <h2 id="intro_2" className="text-gradient">
        私は
        <b className="">
          <ruby>
            盧<rp>(</rp>
            <rt>ノ</rt>
            <rp>)</rp>亨<rp>(</rp>
            <rt>ヒョン</rt>
            <rp>)</rp>來<rp>(</rp>
            <rt>レ</rt>
            <rp>)</rp>
          </ruby>
        </b>
        と申します。
      </h2>
      <h3 id="intro_3" className="text-gradient">
        どうぞよろしくお願いします。
      </h3>
    </div>
  );
}
