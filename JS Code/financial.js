const storageDiv = document.getElementById('description-div');
const resultsDiv = document.getElementById('results-div');

function clearResults() {
  resultsDiv.innerHTML = '';
}

function copyResult() {
  // Getting the id of the span element
  const input = (document.getElementById('copy-content')).toString;

  navigator.clipboard.writeText(input.value);
}

function ratioFunc() {
  // Getting the drop down list id
  const selection = document.getElementById('equations');
  
  // Which ratio did the user choose??
  let ratioChoice = selection.value;

  
  // For acid ratio
  if (ratioChoice === 'acid') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Acid-Test Ratio</p>'
    const desc = '<p>The Acid-Test Ratio indicates whether a company has the ability to pay short-term liabilities. A ratio of 1 or higher generally means the company can cover these liabilities. While a ratio of less than 1 generally means that the company cannot cover these liabilities.</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30); padding-bottom: 5px;">In order to calculate this ratio find <mark>cash</mark>, <mark>marketable securities</mark>, <mark>accounts receivable</mark>, and <mark>current liabilities</mark> from the <i>Balance Sheet</i> and input the values in the respective fields below.</p>';
    // Fields that need to be added with ids so we can pull the values
    const cashField = '<input id="cashAmount" type="text" placeholder="Cash" />';
    const marketField = '<input id="marketAmount" type="text" placeholder="Marketable Securities" />';
    const accountsField = '<input id="accountsAmount" type="text" placeholder="Accounts Receivable" />';
    const liabilitiesField = '<input id="liabilitiesAmount" type="text" placeholder="Current Liabilities" />';

    //Calculate button
    const calculateButton = '<button onclick="acidFunc()">Compute</button>';

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + '<form autocomplete="off">' + cashField + marketField + accountsField + liabilitiesField + '</form>' + calculateButton;
  }

  // for asset turnover ratio
  else if (ratioChoice === 'asset-turnover') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Asset Turnover Ratio</p>'
    const desc = '<p>The Asset Turnover Ratio indicates how well a company is using its assets in the derivation of sales and revenue. Asset Turnover Ratios differ greatly between sectors. Consult industry averages before making any comparisons.</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30); padding-bottom: 5px;">In order to calculate this ratio, input <mark>revenue</mark> from the <i>Income Statement</i>. Also input <mark>total assets from the beginning of the year</mark> and <mark>total assets from the end of the year</mark> which can be found in the <i>Balance Sheet</i>.</p>';
    // Fields that need to be added with ids so we can pull the values
    const revenuesField = '<input id="revenueAmount" type="text" placeholder="Revenue" />';
    const beginningAssetsField = '<input id="beginningAssetsAmount" type="text" placeholder="Beginning Total Assets" />';
    const endingAssetsField = '<input id="endingAssetsAmount" type="text" placeholder="Ending Total Assets" />';

    //Calculate button
    const calculateButton = '<button onclick="assetTurnFunc()">Compute</button>';

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + '<form autocomplete="off">' + revenuesField + beginningAssetsField + endingAssetsField + '</form>' + calculateButton;
  }

  // Moving onto cash ratio
  else if (ratioChoice === "cash") {
    const title = '<p style="font-weight: bold; font-size: 18px;">Cash Ratio</p>'
    const desc = '<p>The Cash Ratio is a liquidity ratio that determines whether a company is able to pay short term liabilities with cash on hand. A cash ratio between .5 and 1 is generally considered good for most industries. Above 1 means that the company can cover short term liabilities with more cash leftover.</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;">In order to calculate this ratio, input <mark>cash</mark>, <mark>cash equivalents</mark>, and <mark>current liabilities</mark> from the balance sheet. Cash equivalents are accounts or financial positions that liquidate easily and have short maturity periods (typically less than 90 days). Some examples of cash equivalents include: Money market funds, treasury bills, or certificates of deposit (CDs).</p>';
    // Fields that need to be added with ids so we can pull the values
    const cashField = '<input id="cashAmount" type="text" placeholder="Cash" />';
    const cashEquivalentsField = '<input id="cashEquivalentsAmount" type="text" placeholder="Cash Equivalents" />';
    const currentLiabilitiesField = '<input id="currentLiabilitiesAmount" type="text" placeholder="Current Liabilities" />';

    //Calculate button
    const calculateButton = '<button onclick="cashFunc()">Compute</button>';

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + '<form autocomplete="off">' + cashField + cashEquivalentsField + currentLiabilitiesField + '</form>' + calculateButton;
  }

  else if (ratioChoice === 'current') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Current Ratio</p>'
    const desc = '<p>The Current Ratio aka Working Capital Ratio indicates the ability of a business to meet yearly short term obligations. Does the company&#39;s current assets cover current liabilities? A current ratio greater than 1 usually indicates good financial health.</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;">In order to calculate this ratio, input <mark>current assets</mark> and <mark>current liabilities</mark> both of which are found on the <i>Balance Sheet</i> into the fields below.</p>';
    // Fields that need to be added with ids so we can pull the values
    const currentAssetsField = '<input id="currentAssetsAmount" type="text" placeholder="Current Assets" />';
    const currentLiabilitiesField = '<input id="currentLiabilitiesAmount" type="text" placeholder="Current Liabilties" />';

    //Calculate button
    const calculateButton = '<button onclick="currentFunc()">Compute</button>';

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + '<form autocomplete="off">' + currentAssetsField + currentLiabilitiesField + '</form>' + calculateButton;
  }

  else if (ratioChoice === 'debt') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Debt Ratio</p>'
    const desc = '<p>The Debt Ratio is a leverage ratio. It indicates the company&#39;s extent in using debt to garner assets. A ratio above 1 indicates that much of the assets were obtained through debt. A ratio below 1 indicates that some equity was used to obtain the assets. This ratio is very industry dependent as some will encounter more debt obligations than others; Look at the industry averages before doing any comparisons.</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;">In order to calculate this ratio, input <mark>Total Debt</mark> and <mark>Total Assets</mark> both of which are found on the <i>Balance Sheet</i> into the fields below.</p>';
    // Fields that need to be added with ids so we can pull the values
    const totalDebtField = '<input id="totalDebtAmount" type="text" placeholder="Total Debt" />';
    const totalAssetsField = '<input id="totalAssetsAmount" type="text" placeholder="Total Liabilities" />';

    //Calculate button
    const calculateButton = '<button onclick="debtFunc()">Compute</button>';

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + '<form autocomplete="off">' + totalDebtField + totalAssetsField + '</form>' + calculateButton;
  }

  // ratio choice is debt equity
  else if (ratioChoice === 'debt-equity') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Debt to Equity Ratio</p>'
    const desc = '<p>The Debt to Equity ratio is another financial leverage ratio. It communicates to what extent a company is using debt or equity to finance its operations. The ratio tells you apporoximately how much debt you have for every dollar of equity. For instance, if Mountain Side LLC has $67,000 of total liabilities and $100,000 of total shareholder&#39;s equity then Mountain Side has $.67 worth of debt for every $1 worth of equity. A good mix of debt versus equity is generally good, and ratios between sectors might vary.</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;">In order to calculate this ratio, input <mark>Total Liabilities</mark> and <mark>Total Shareholder&#39;s Equity</mark> both of which are found on the <i>Balance Sheet</i> into the fields below.</p>';
    // Fields that need to be added with ids so we can pull the values
    const totalLiabilitiesField = '<input id="totalLiabilitiesAmount" type="text" placeholder="Total Liabilities" style="width: 200px;" />';
    const totalEquityField = '<input id="totalEquityAmount" type="text" placeholder="Total Shareholder&#39;s Equity" style="width: 200px;"/>';

    const calculateButton = '<button onclick="debtEquityFunc()">Compute</button>'

    storageDiv.innerHTML = title + desc + terms + '<form autocomplete="off">' + totalLiabilitiesField + totalEquityField + '</form>' + calculateButton;
  }

  else if (ratioChoice === 'dividend-yield') {
    let title = '<p style="font-weight: bold; font-size: 18px;">Dividend Yield Ratio</p>'
    const desc = '<p>The Dividend Yield Ratio is a financial ratio. This ratio proves useful if the company has shares of public stock. It relays information about dividends recieved by shareholders in comparison to the market value price of the security. Dividends are only distributed if there is are retained earnings observed in the fiscal period. </p>'
    const disclaimer = '<p style="font-weight:bold;">If you know the dividend per share already then disregard this section...</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;">In order to calculate this ratio, first we will need to calculate the <mark>Dividend Per Share</mark>. To do this we need the <mark>Total Annual Dividend Payment</mark> and the <mark>Number of Shares Outstanding</mark> of the company, both of which can be found on any reputable public trading website. Once you have calculated the Dividend per Share the value will automatically be added to the field for the Dividend Yield calculation. From here just input the <mark>Market Value per Share</mark> of the security in the respective Market Value per Share field.</p> ';
    // Fields that need to be added with ids so we can pull the values
    const dividendPayoutField = '<input id="dividendPayoutAmount" type="text" placeholder="Total Dividend Payout" style="width: 250px;" />';
    const sharesOutstandingField = '<input id="sharesOutstandingAmount" type="text" placeholder="Number of Shares Outstanding" style="width: 250px;" />';
    const dividendPerShareField = '<input id="dividendPerShareAmount" type="text" placeholder="Dividend per Share" style="width: 250px;" />';
    const marketValuePerShareField = '<input id="marketValuePerShareAmount" type="text" placeholder="Market Value per Share" style="width: 250px;" />'
    const dividendShareText = '<p style="font-weight: bold;">Dividend Per Share</p>';
    const dividendYieldText = '<p style="font-weight: bold; border-top: 3px solid rgb(160, 30, 30)">Dividend Yield</p>';
    //Making sure people know this is the dividend per share
    //Calculate button
    const dividendPerShareButton = '<button onclick="dividendShareFunc()" style="margin-bottom: 5px;">Compute Dividend per Share</button>';
    const dividendYieldButton = '<button onclick="dividendYieldFunc()">Compute Dividend Yield</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + disclaimer + dividendShareText + '<form autocomplete="off">' + dividendPayoutField + sharesOutstandingField + '</form>' + dividendPerShareButton + dividendYieldText + '<form autocomplete="off">' + dividendPerShareField + marketValuePerShareField + '</form>' + dividendYieldButton;
  }


  else if (ratioChoice === 'eps') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Earnings per Share (EPS)</p>'
    const desc = '<p>EPS is a financial ratio which communicates how well a company is able to produce income for its shareholders. EPS in combination with the P/E ratio can be used to determine whether a company&#39;s stock is selling at a premium (higher price) or at a discount (lower price) when compared to others in an industry. It is hard to compare just EPS between companies because each company has a different number of shares outstanding, which impacts the magnitude of the resulting ratio.</p>'
    const terms = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;">In order to calculate EPS, input <mark>Net Income</mark> which can be found on the <i>Income Statement</i>. Then input <mark>Preferred Dividends</mark> and <mark>End of Period Shares Outstanding</mark> which can be found on the <i>Balance Sheet</i> into the fields below.</p>';
    const disclaimer = '<p style="font-weight: bold;">If you are using the weighted average EPS method then input the Weighted Average Share Number into the End of Period Shares Outstanding</p>'
    // Fields that need to be added with ids so we can pull the values
    const currentAssetsField = '<input id="currentAssetsAmount" type="text" placeholder="Current Assets" />';
    const currentLiabilitiesField = '<input id="currentLiabilitiesAmount" type="text" placeholder="Current Liabilties" />';

    //Calculate button
    const calculateButton = '<button onclick="currentFunc()">Compute</button>';

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + disclaimer + '<form autocomplete="off">' + currentAssetsField + currentLiabilitiesField + '</form>' + calculateButton;
  }

  // If the ratio type is changed or upon first load the results div is going to be cleared
  clearResults();
}

// Calculation for acid-test
function acidFunc() {
  const cashValue = Number(document.getElementById('cashAmount').value);
  const marketValue = Number(document.getElementById('marketAmount').value);
  const accountsValue = Number(document.getElementById('accountsAmount').value);
  const liabilitiesValue = Number(document.getElementById('liabilitiesAmount').value);

  const acidRatio = (cashValue + marketValue + accountsValue) / liabilitiesValue;

  refinedRatio = acidRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    resultsDiv.innerHTML = `Acid-Test Ratio: ${refinedRatio}`;
  }
}

//Calculation for assets turnover
function assetTurnFunc() {
  const revenueValue = Number(document.getElementById('revenueAmount').value);
  const beginningAssetsValue = Number(document.getElementById('beginningAssetsAmount').value);
  const endingAssetsValue = Number(document.getElementById('endingAssetsAmount').value);

  const assetTurnRatio = revenueValue / ((beginningAssetsValue + endingAssetsValue) / 2);

  refinedRatio = assetTurnRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    resultsDiv.innerHTML = `Asset Turnover Ratio: ${refinedRatio}`;
  }
}

// Calculation for Cash Ratio
function cashFunc() {
  const cashValue = Number(document.getElementById('cashAmount').value);
  const cashEquivalentsValue = Number(document.getElementById('cashEquivalentsAmount').value);
  const currentLiabilitiesValue = Number(document.getElementById('currentLiabilitiesAmount').value);

  const cashRatio = (cashValue + cashEquivalentsValue) / currentLiabilitiesValue;

  refinedRatio = cashRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    resultsDiv.innerHTML = `Cash Ratio: <span id=copy-content>${refinedRatio}</span> 
    <div class="copy-container" onclick="copyResult(refinedRatio)">
    <img src="icons/copy symbol.svg" class="copy-icon"> 
    <div class="tooltip">Copy</div>
    </div>`;
  }
}

// Calculation for current ratio
function currentFunc() {
  const currentAssetsValue = Number(document.getElementById('currentAssetsAmount').value);
  const currentLiabilitiesValue = Number(document.getElementById('currentLiabilitiesAmount').value);

  const currentRatio = currentAssetsValue / currentLiabilitiesValue;

  refinedRatio = currentRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    resultsDiv.innerHTML = `Current Ratio: ${refinedRatio}`;
  }
}

// Calculation for the debt ratio
function debtFunc() {
  const totalDebtValue = Number(document.getElementById('totalDebtAmount').value);
  const totalAssetsValue = Number(document.getElementById('totalAssetsAmount').value);

  const debtRatio = totalDebtValue / totalAssetsValue;

  refinedRatio = debtRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    resultsDiv.innerHTML = `Debt Ratio: ${refinedRatio}`;
  }
}

//Calculation for Debt to Equity Ratio
function debtEquityFunc() {
  const totalLiabilitiesValue = Number(document.getElementById('totalLiabilitiesAmount').value);
  const totalEquityValue = Number(document.getElementById('totalEquityAmount').value);

  const debtEquityRatio = totalLiabilitiesValue / totalEquityValue;

  refinedRatio = debtEquityRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    resultsDiv.innerHTML = `Debt to Equity Ratio: ${refinedRatio}`;
  }
}

//Calculating dividend per share
function dividendShareFunc() {
  // Now that we have these we can do a range of transformations on them
  const payoutAmount = document.getElementById('dividendPayoutAmount');
  const sharesOutstanding = document.getElementById('sharesOutstandingAmount');

  const payoutValue = payoutAmount.value;
  const sharesOutstandingValue = sharesOutstanding.value

  const dividendPerShare = payoutValue / sharesOutstandingValue;
  const dividendPerShareString = dividendPerShare.toString();

  const dividendShareAmount = document.getElementById("dividendPerShareAmount");

  if (dividendPerShareString === 'NaN') {
    resultsDiv.innerHTML = 'Please enter numbers or decimals only'
  }
  else {
    dividendShareAmount.value = dividendPerShare;
  }
}

// Calculating Dividend Yield
function dividendYieldFunc() {
  const marketValuePerShare = document.getElementById('marketValuePerShareAmount');
  const dividendPerShare = document.getElementById('dividendPerShareAmount');

  const marketValuePerShareValue = marketValuePerShare.value;
  const dividendPerShareValue = dividendPerShare.value;

  const dividendYieldRatio = dividendPerShareValue / marketValuePerShareValue;

  const dividendYieldRatioText = dividendYieldRatio.toString();

  if (dividendYieldRatioText === 'NaN') {
    resultsDiv.innerHTML = "Please input only numbers or decimals"
  }
  else {
    document.getElementById("results-div").innerHTML = `<p>Dividend Yield Ratio: ${dividendYieldRatio}</p>`;
  }
}