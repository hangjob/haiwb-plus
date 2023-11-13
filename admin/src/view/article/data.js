import { NButton, NPopconfirm, NSwitch} from "naive-ui"
import {h} from "vue"

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
            title: "点赞",
            key: "like",
            align: "center",
            ellipsis: true,
            width: 160
        },
        {
            title: "浏览",
            key: "views",
            align: "center",
            ellipsis: true,
            width: 160
        },
        {
            title: "SEO",
            key: "seo",
            align: "center",
            ellipsis: true
        },
        {
            title: "路由别名",
            key: "router",
            align: "center",
            ellipsis: true
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