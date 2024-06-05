export const color=[
    "black",
    "white",
    "red",
    "blue",
    "green",
    "yellow",
    "pink",
    "purple",
    "brown",
    "gray",
    "multi"
]
export const filters = [
    {
        id:"color",
        name:"Color",
        options:[
            {value:"black", label:"Black"},
            {value:"white", label:"White"},
            {value:"red", label:"Red"},
            {value:"blue", label:"Blue"},
            {value:"green", label:"Green"},
            {value:"yellow", label:"Yellow"},
            {value:"pink", label:"Pink"},
            {value:"purple", label:"Purple"},
            {value:"brown", label:"Brown"},
            {value:"gray", label:"Gray"},
            {value:"multi", label:"Multi"}
        ]
    },
    {
        id:"size",
        name:"Size",
        options: [
            {value:"S", label:"S"},
            {value:"M", label:"M"},
            {value:"L", label:"L"},
            {value:"XL", label:"XL"}
        ]
    }
]
export const singleFilter =[
    {
        id:"price",
        name:"Price",
        options:[
            {value:"0-200", label:"under $200"},
            {value:"200-300", label:"$200 - $300"},
            {value:"300-400", label:"$300 - $400"},
            {value:"400-500", label:"$400 - $500"},
            {value:"500", label:"Over $500"}
        ],
    },
    {
        id:"discount",
        name:"Discount",
        options:[
            {value:"10", label:"10% and Above"},
            {value:"20", label:"20% and Above"},
            {value:"30", label:"30% and Above"},
            {value:"40", label:"40% and Above"},
            {value:"50", label:"50% and Above"},
            {value:"60", label:"60% and Above"},
            {value:"70", label:"70% and Above"},
            {value:"80", label:"80% and Above"},
        ]
    },
    {
        id: "stock",
        name:"Aviability",
        options:[
            {value:"in_stock", label:"In Stock"},
            {value:"out_of_stock", label:"Out of Stock"}
        ]
    }
]

export const sortOptions = [
    {name:"Price: Low to High", query:"price_low", current:false},
    {name:"Price: High to Low", query:"price_high", current:false},
];