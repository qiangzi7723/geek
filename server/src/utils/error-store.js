let errCode = 3000
module.exports = {
    commonStatus: {
        '200': {
            statusCode: 200,
            data: {
                code: 0,
                msg: 'OK'
            }
        },
        '301': {
            statusCode: 301,
            data: {
                code: 301,
                msg: 'Moved Permanently'
            }
        },
        '302': {
            statusCode: 302,
            data: {
                code: 302,
                msg: 'Redirecting'
            }
        },
        '404': {
            statusCode: 404,
            data: {
                code: 404,
                msg: 'Not Found'
            }
        },
        '403': {
            statusCode: 403,
            data: {
                code: 403,
                msg: 'Forbidden'
            }
        }
    },
    OK: {
        statusCode: 200,
        data: {
            code: 0,
            msg: 'OK'
        }
    },
    PARAM_ERROR: {
        statusCode: 400,
        data: {
            code: errCode++,
            msg: '参数错误'
        }
    },
    SERVER_ERROR: {
        statusCode: 500,
        data: {
            code: errCode++,
            msg: '服务器错误'
        }
    },
    DB_ERROR: {
        statusCode: 500,
        data: {
            code: errCode++,
            msg: '数据库错误'
        }
    },
    UNAUTHORIZED: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '未授权'
        }
    },
    NEED_LOGIN: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '未登录'
        }
    },
    ADDRESS_EXIST: {
        statusCode: 400,
        data: {
            code: errCode++,
            msg: '地址已存在'
        }
    },
    GIFT_NOT_FOUND: {
        statusCode: 400,
        data: {
            code: errCode++,
            msg: '奖品不存在'
        }
    },
    SMS_RATE_ERROR: {
        statusCode: 400,
        data: {
            code: errCode++,
            msg: '短信请求过于频繁，请2分钟后再来'
        }
    },
    SMS_SEND_ERROR: {
        statusCode: 500,
        data: {
            code: errCode++,
            msg: '验证码发送失败，请稍候再试'
        }
    },
    CHANCE_USED: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '抽奖机会已经使用过'
        }
    },
    CHANCE_CONDITION_NOT_MET: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '抽奖条件不满足'
        }
    },
    SMS_CODE_NOT_CORRECT: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '验证码出错'
        }
    },
    SYSTEM_MAINTAIN: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '系统维护中'
        }
    },
    NO_CHANCE: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '没有抽奖机会'
        }
    },
    NO_USER: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '没有用户信息'
        }
    },
    HELP_SELF: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '不能给自己助力'
        }
    },
    REPEAT_HELP: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '重复助力'
        }
    },
    NO_CODE: {
        statusCode: 403,
        data: {
            code: errCode++,
            msg: '非法，没有对应的核销码'
        } 
    }
}