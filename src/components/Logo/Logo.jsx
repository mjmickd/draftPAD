const logoPhoto = new URL("https://i.imgur.com/wA93BOE.png")

export default function Logo() {
  return (
    <div className="Logo">
      <img src={logoPhoto} />
    </div>
  );
}