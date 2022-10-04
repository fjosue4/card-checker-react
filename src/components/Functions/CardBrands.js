import { Icon } from "@iconify/react"
export const cardBrands = {
visaIcon: <Icon icon="cib:cc-visa" />,
visaText: "You're checking a Visa card",
MasterCardIcon: <Icon icon="cib:cc-mastercard" />,
masterCardText: "You're checking a MasterCard",
amexCardIcon: <Icon icon="cib:cc-amex" />,
amexCardText: "You're checking an AMEX card",
invalidCardIcon: <Icon icon="ci:warning" className="warning" />,
invalidCardText: "Please enter a Visa, MasterCard or AMEX number!"
}