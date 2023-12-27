import {NButton, NPopconfirm, NSwitch, NTag} from "naive-ui"
import {h} from "vue"
import {labelOptions} from "@/enum/index.js";

const createColumns = ({compHandle}) => {
    return [
        {
            type: "selection",
        },
        {
            title: "文章名称",
            key: "title",
            align: "center",
            ellipsis: true,
        },
        {
            title: "一级分类",
            key: "classify_id",
            align: "center",
            ellipsis: true,
            width: 120,
            render(row) {
                return h(
                    NTag,
                    {
                        style: {
                            marginRight: '6px'
                        },
                        type: 'success',
                        bordered: false
                    },
                    {
                        default: () => row.classify_id_data.title
                    }
                )
            }
        },
        {
            title: "二级分类",
            key: "nav_id_list",
            align: "center",
            ellipsis: false,
            width: 200,
            render(row) {
                const html = [];
                row?.nav_id_list.forEach((item) => {
                    html.push(h(NTag, {
                        style: {
                            marginRight: '6px',
                            marginBottom:'5px'
                        },
                        type: 'warning',
                        bordered: false,
                    }, {
                        default: () => item.title
                    }))
                })
                return h(
                    'div',
                    {},
                    {
                        default: () => html
                    }
                )
            }
        },
        {
            title: "关键词",
            key: "keys_list",
            align: "center",
            ellipsis: false,
            width: 200,
            render(row) {
                const html = [];
                row?.keys_list.forEach((item) => {
                    html.push(h(NTag, {
                        style: {
                            marginRight: '6px',
                            marginBottom:'5px'
                        },
                        type: 'info',
                        bordered: false,
                    }, {
                        default: () => item.title
                    }))
                })
                return h(
                    'div',
                    {},
                    {
                        default: () => html
                    }
                )
            }
        },
        {
            title: "标签",
            key: "label",
            align: "center",
            ellipsis: true,
            width: 120,
            render(row) {
                const data = labelOptions.find((item) => item.value === row.label)
                return h(
                    NTag,
                    {
                        style: {
                            marginRight: '6px'
                        },
                        type: 'info',
                        bordered: false
                    },
                    {
                        default: () => data.label
                    }
                )
            }
        },
        {
            title: "SEO",
            key: "seo",
            align: "center",
            ellipsis: true
        },
        {
            title: "点赞",
            key: "like",
            align: "center",
            ellipsis: true,
            width: 90
        },
        {
            title: "浏览",
            key: "views",
            align: "center",
            ellipsis: true,
            width: 100
        },
        {
            title: "是否显示",
            key: "shows",
            align: "center",
            ellipsis: true,
            width: 100,
            render(row) {
                return h(NSwitch, {
                    defaultValue: row.shows
                })
            }
        },
        {
            title: "操作",
            key: "actions",
            align: "center",
            width: 130,
            render(row) {
                return h("div", [
                    h(NButton,
                        {
                            type: "success",
                            size: "small",
                            ghost: true,
                            onClick: () => compHandle.edit(row),
                            style: {marginRight: "5px"}
                        },
                        {default: () => "编辑"}),

                    h(NPopconfirm,
                        {
                            onPositiveClick: () => {
                                compHandle.del(row)
                            },
                            negativeText: "取消",
                            positiveText: "确定"
                        },
                        {
                            trigger: () => {
                                return h(
                                    NButton,
                                    {
                                        type: "error",
                                        strong: true,
                                        size: "small",
                                        ghost: true,
                                    },
                                    {default: () => "删除"}
                                )
                            },
                            default: () => {
                                return "确认删除该条数据嘛？"
                            }
                        }
                    ),
                ])
            }
        }
    ]
}


const tableSize = [
    {
        label: "较小",
        value: "small",
    },
    {
        label: "适中",
        value: "medium",
    },
    {
        label: "较大",
        value: "large",
    }
]


export {
    createColumns,
    tableSize,
}
