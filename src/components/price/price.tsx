import style from "./price.module.scss"

let formatter = new Intl.NumberFormat("no", {
    currency: "NOK",
    style: 'currency',
    maximumFractionDigits: 0,
})

export default function Price({ value }: { value: number }) {
    return (
        <span className={style.price}>
            {formatter.format(value)}
        </span>
    )
}