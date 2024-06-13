import { AnyObject } from '../interfaces/any-object';

export const ROUTES: { [key: string]: string } = {
    'api.token': '/session/token',
    'api.token.invalidate': '/session/token',
    'api.token.renew': '/session/refresh_token',
    'user.profile': '/user/profile',
    'user.margins': '/user/margins',
    'user.margins.segment': '/user/margins/{segment}',

    'orders': '/orders',
    'trades': '/trades',
    'order.info': '/orders/{order_id}',
    'order.place': '/orders/{variety}',
    'order.modify': '/orders/{variety}/{order_id}',
    'order.cancel': '/orders/{variety}/{order_id}',
    'order.trades': '/orders/{order_id}/trades',
    'order.margins': '/margins/orders',
    'order.margins.basket': '/margins/basket',
    "order.contract_note": "/charges/orders",

    'portfolio.positions': '/portfolio/positions',
    'portfolio.holdings': '/portfolio/holdings',
    'portfolio.holdings.auction': '/portfolio/holdings/auctions',
    'portfolio.positions.convert': '/portfolio/positions',

    'mf.orders': '/mf/orders',
    'mf.order.info': '/mf/orders/{order_id}',
    'mf.order.place': '/mf/orders',
    'mf.order.cancel': '/mf/orders/{order_id}',

    'mf.sips': '/mf/sips',
    'mf.sip.info': '/mf/sips/{sip_id}',
    'mf.sip.place': '/mf/sips',
    'mf.sip.modify': '/mf/sips/{sip_id}',
    'mf.sip.cancel': '/mf/sips/{sip_id}',

    'mf.holdings': '/mf/holdings',
    'mf.instruments': '/mf/instruments',

    'market.instruments.all': '/instruments',
    'market.instruments': '/instruments/{exchange}',
    'market.historical': '/instruments/historical/{instrument_token}/{interval}',
    'market.trigger_range': '/instruments/trigger_range/{transaction_type}',

    'market.quote': '/quote',
    'market.quote.ohlc': '/quote/ohlc',
    'market.quote.ltp': '/quote/ltp',

    'gtt.triggers': '/gtt/triggers',
    'gtt.trigger_info': '/gtt/triggers/{trigger_id}',
    'gtt.place': '/gtt/triggers',
    'gtt.modify': '/gtt/triggers/{trigger_id}',
    'gtt.delete': '/gtt/triggers/{trigger_id}'
};

export const DEFAULTS: AnyObject = {
    'root': 'https://api.kite.trade',
    'login': 'https://kite.zerodha.com/connect/login',
    'debug': false,
    'timeout': 7000
};