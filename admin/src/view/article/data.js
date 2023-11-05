import { NButton, NPopconfirm, NSwitch} from "naive-ui"
import {h} from "vue"

const createColumns = ({compHandle}) => {
    return [
        {
            type: "selection",
        },
        {
            title: "菜单名称",
            key: "title",
            align: "center",
            ellipsis: true,
        },
        {
            title: "路由",
            key: "path",
            align: "center",
            ellipsis: true,
            width: 160
        },
        {
            title: "路径",
            key: "file",
            align: "center",
            ellipsis: true,
            width: 160
        },
        {
            title: "图标",
            key: "icon",
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
            title: "是否缓存",
            key: "keepAlive",
            align: "center",
            ellipsis: true,
            width: 100,
            render(row) {
                return h(NSwitch, {
                    defaultValue: row.keepAlive
                })
            }
        },
        {
            title: "是否固定",
            key: "tabFix",
            align: "center",
            ellipsis: true,
            width: 100,
            render(row) {
                return h(NSwitch, {
                    defaultValue: row.tabFix
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


const treeData = [
    {
        label: "阿里巴巴",
        key: "1",
        children: [{label: "数字政务", key: "10"}, {label: "Ai事业部", key: "11"}, {
            label: "住建事业部",
            key: "12"
        }, {label: "胜算事业部", key: "13"}]
    },
    {
        label: "丰树科技",
        key: "2",
        children: [{label: "塔吊事业部", key: "21"}, {label: "人工智能", key: "22"}, {label: "大数据研发", key: "23"}]
    },
    {
        label: "合作伙伴",
        key: "3",
        children: [{label: "阿里巴巴", key: "31"}, {label: "新浪科技", key: "32"}, {label: "网易云", key: "33"}]
    }
]


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

const tagOptions = [
    {label: "管理员", value: "admin"},
    {label: "测试人员", value: "test"},
    {label: "普通用户", value: "web"},
    {label: "vip用户", value: "vip"},
]

export {
    createColumns,
    treeData,
    tableSize,
    tagOptions
}
