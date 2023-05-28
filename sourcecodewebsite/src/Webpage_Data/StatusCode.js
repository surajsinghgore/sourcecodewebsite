import MainHeader from "../components/MainHeader";
import SideNavBar from "../components/SideNavBar";
import LoginCheck from "../pages/LoginCheck";
import "../css/demo.css";
import React,{ useEffect } from "react";
import Prism from "prismjs";
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min';
import 'prismjs/plugins/toolbar/prism-toolbar.min'
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/toolbar/prism-toolbar.css';


function usePrismHighlightAll() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
}

export default function StatusCode() {
  usePrismHighlightAll(); 
    let SubIcon =
    "https://cdn3.iconfinder.com/data/icons/unicons-vector-icons-pack/32/code-512.png";
    return (
        <>
            <LoginCheck />
      <MainHeader />
      <SideNavBar
        homeOn={false}
        codeOn={false}
        studyOn={true}
        noteOn={false}
        videoOn={false}
        detailOn={false}
      />
      <div className="template">
        <div className="top-title">
          <span>STATUS CODE</span>

          <img src={SubIcon} alt={SubIcon} id="b"/>
        </div>

        <div className="allData">
<h1>Read this for proper status code render in backend</h1>
<h2>HTTP response status codes</h2>
<h3>1. Informational responses</h3>
<p>(100–199)</p>
<h3>2. Successful responses </h3>
<p>(200–299)</p>
<h3>3. Redirects </h3>
<p>(300–399)</p>
<h3>4. Client errors </h3>
<p> (400–499)</p>
<h3>5. Server errors</h3>
<p>(500–599)</p>
<h1>more details present at below</h1>
<h2>1. Information responses</h2>
<h3>100 Continue</h3>
<p>This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.</p>
<h3>101 Switching Protocol</h3>
<p>This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.</p>
<h3>102 Processing (WebDAV)</h3>
<p>This code indicates that the server has received and is processing the request, but no response is available yet.</p>
<h3>103 Early Hints</h3>
<p>This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.</p>

<h2>2. Successful responses</h2>
<h3>200 OK</h3>
<p>The request has succeeded. The meaning of the success depends on the HTTP method:

GET: The resource has been fetched and is transmitted in the message body.
HEAD: The representation headers are included in the response without any message body.
PUT or POST: The resource describing the result of the action is transmitted in the message body.
TRACE: The message body contains the request message as received by the server.</p>
<h3>201 Created</h3>
<p>The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.</p>
<h3>202 Accepted</h3>
<p>The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.</p>
<h3>203 Non-Authoritative Information</h3>
<p>This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status</p>
<h3>204 No Content</h3>
<p>There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.</p>
<h3>205 Reset Content</h3>
<p>Tells the user-agent to reset the document which sent this request.</p>
<h3>206 Partial Content</h3>
<p>This response code is used when the Range header is sent from the client to request only part of a resource.</p>
<h3>207 Multi-Status</h3>
<p>Conveys information about multiple resources, for situations where multiple status codes might be appropriate.</p>
<h3>208 Already Reported</h3>
<p>Used inside a  response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.</p>
<h3>226 IM Used</h3>
<p>The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.</p>

<h2>3. Redirection messages</h2>
<h3>300 Multiple Choice</h3>
<p>The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)</p>
<h3>301 Moved Permanently</h3>
<p>The URL of the requested resource has been changed permanently. The new URL is given in the response.</p>


<h3>302 Found</h3>
<p>This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.</p>
<h3>303 See Other</h3>
<p>The server sent this response to direct the client to get the requested resource at another URI with a GET request.</p>
<h3>304 Not Modified</h3>
<p>This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.</p>
<h3>305 Use Proxy</h3>
<p>Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.</p>
<h3>306 unused</h3>
<p>This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.</p>
<h3>307 Temporary Redirect</h3>
<p>The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.</p>
<h3>308 Permanent Redirect</h3>
<p>This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.</p>

<h2>4. Client error responses</h2>
<h3>400 Bad Request</h3>
<p>The server could not understand the request due to invalid syntax.</p>
<h3>401 Unauthorized</h3>
<p>Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.</p>
<h3>402 Payment Required</h3>
<p>This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.</p>
<h3>403 Forbidden</h3>
<p>The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server.</p>
<h3>404 Not Found</h3>
<p>The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web.</p>
<h3>405 Method Not Allowed</h3>
<p>The request method is known by the server but is not supported by the target resource. For example, an API may forbid DELETE-ing a resource.</p>
<h3>406 Not Acceptable</h3>
<p>This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.</p>
<h3>407 Proxy Authentication Required</h3>
<p>This is similar to 401 but authentication is needed to be done by a proxy.</p>
<h3>408 Request Timeout</h3>
<p>This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.</p>
<h3>409 Conflict</h3>
<p>This response is sent when a request conflicts with the current state of the server.</p>
<h3>410 Gone</h3>
<p>This response is sent when the requested content has been permanently deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.</p>
<h3>411 Length Required
</h3>
<p>Server rejected the request because the Content-Length header field is not defined and the server requires it.</p>
<h3>412 Precondition Failed</h3>
<p>The client has indicated preconditions in its headers which the server does not meet.</p>

<h3>413 Payload Too Large</h3>
<p>Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.</p>
<h3>414 URI Too Long</h3>
<p>The URI requested by the client is longer than the server is willing to interpret.</p>
<h3>415 Unsupported Media Type</h3>
<p>The media format of the requested data is not supported by the server, so the server is rejecting the request.</p>
<h3>416 Range Not Satisfiable</h3>
<p>The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.</p>
<h3>417 Expectation Failed</h3>
<p>This response code means the expectation indicated by the Expect request header field can't be met by the server</p>
<h3>418 I'm a teapot</h3>
<p>The server refuses the attempt to brew coffee with a teapot.</p>
<h3>421 Misdirected Request</h3>
<p>The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.</p>
<h3>422 Unprocessable Entity</h3>
<p>The request was well-formed but was unable to be followed due to semantic errors.</p>
<h3>423 Locked </h3>
<p>The resource that is being accessed is locked.</p>
<h3>424 Failed Dependency</h3>
<p>The request failed due to failure of a previous request.</p>
<h3>425 Too Early</h3>
<p>Indicates that the server is unwilling to risk processing a request that might be replayed.</p>
<h3>426 Upgrade Required</h3>
<p>The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).</p>
<h3>428 Precondition Required</h3>
<p>The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.</p>
<h3>429 Too Many Requests</h3>
<p>The user has sent too many requests in a given amount of time ("rate limiting").</p>
<h3>431 Request Header Fields Too Large</h3>
<p>The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.</p>
<h3>451 Unavailable For Legal Reasons</h3>
<p>The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.</p>
<h2>5. Server error responses</h2>
<h3>500 Internal Server Error</h3>
<p>The server has encountered a situation it doesn't know how to handle.</p>
<h3>501 Not Implemented</h3>
<p>The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.</p>
<h3>502 Bad Gateway</h3>
<p>This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.</p>
<h3>503 Service Unavailable</h3>
<p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This response should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.</p>
<h3>504 Gateway Timeout</h3>
<p>This error response is given when the server is acting as a gateway and cannot get a response in time.</p>
<h3>505 HTTP Version Not Supported</h3>
<p>The HTTP version used in the request is not supported by the server.</p>
<h3>506 Variant Also Negotiates</h3>
<p>The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.</p>
<h3>507 Insufficient Storage </h3>
<p>The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.</p>
<h3>508 Loop Detected</h3>
<p>The server detected an infinite loop while processing the request.</p>
<h3>510 Not Extended</h3>
<p>Further extensions to the request are required for the server to fulfill it.</p>

<h3>511 Network Authentication Required</h3>
<p>The 511 status code indicates that the client needs to authenticate to gain network access</p>

<h2>for more details click below for official website</h2>
<h5><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" target="_blank" rel="noreferrer">click me</a></h5>
            </div>
      </div>
        </>
    )
}
