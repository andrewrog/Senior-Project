// We need to change the padding in the section element and then footer type too...
// Add formulas to each ratio
const storageDiv = document.getElementById('description-div');
const resultsDiv = document.getElementById('results-div');
const historyDiv = document.getElementById('history-div')

const roundButton = '<button class="round-button" onclick="roundFunc()">Round to Hundredths</button>';
const historyButton = document.getElementById('show-history');

let history = '';

let result = '';
let forHistory = '';

function clearResults() {
  resultsDiv.innerHTML = '';
}

function copyResult(input) {
  // Getting the id of the span element
  const copiedText = navigator.clipboard.writeText(input);

  return copiedText;
}

function results(variableName) {
  result = resultsDiv.innerHTML = `${variableName}: <span id=copy-content>${refinedRatio}</span>
  <div class="copy-container" onclick="copyResult(refinedRatio)">
  <img src="icons/copy symbol.svg" class="copy-icon"> 
  <div class="tooltip">Copy</div>
  </div> <div> ${roundButton} </div>`;

  forHistory += `${variableName}: <span id=copy-content>${refinedRatio}</span>` + '<br>';
  // And this is where we update the div too so upon each compute event the history will automatically 
  historyDiv.innerHTML = forHistory;

  return result;
}

historyButton.addEventListener('click', () => {
  // Now we need to add values
  if (historyDiv.style.display === 'none') {
    historyDiv.style.display = 'block';
    historyButton.value = 'Hide History';
  }
  else {
    historyDiv.style.display = 'none';
    historyButton.value = 'Show History';
  }
  //Clearing the forHistory varibale
});

function ratioFunc() {
  // Getting the drop down list id
  const selection = document.getElementById('equations');
  
  // Which ratio did the user choose??
  let ratioChoice = selection.value;
  
  // For acid ratio
  if (ratioChoice === 'acid') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Acid-Test Ratio</p>'
    const desc = '<p>The Acid-Test Ratio (Quick Ratio) indicates whether a company has the ability to pay short-term liabilities. A ratio of 1 or higher generally means the company can cover these liabilities. While a ratio of less than 1 generally means that the company cannot cover these liabilities.</p>'
    const terms = '<p>In order to calculate this ratio find <mark>cash</mark>, <mark>marketable securities</mark>, <mark>accounts receivable</mark>, and <mark>current liabilities</mark> from the <i>Balance Sheet</i> and input the values in the respective fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30); padding-bottom: 5px;"><b>Equation</b>: (Cash + Marketable Securities + Accounts Receivable) / Current Liabilities</p>'
    // Fields that need to be added with ids so we can pull the values
    const cashField = '<input id="cashAmount" type="text" placeholder="Cash" />';
    const marketField = '<input id="marketAmount" type="text" placeholder="Marketable Securities" />';
    const accountsField = '<input id="accountsAmount" type="text" placeholder="Accounts Receivable" />';
    const liabilitiesField = '<input id="liabilitiesAmount" type="text" placeholder="Current Liabilities" />';

    //Calculate button
    const calculateButton = '<button onclick="acidFunc()">Compute</button>';
    const clearButton = '<button onclick="clearAcidInputs()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + cashField + marketField + accountsField + liabilitiesField + '</form>' + calculateButton + clearButton;
  }

  // for asset turnover ratio
  else if (ratioChoice === 'asset-turnover') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Asset Turnover Ratio</p>'
    const desc = '<p>The Asset Turnover Ratio indicates how well a company is using its assets in the derivation of sales and revenue. Asset Turnover Ratios differ greatly between sectors. Consult industry averages before making any comparisons.</p>'
    const terms = '<p>In order to calculate this ratio, input <mark>Revenue</mark> from the <i>Income Statement</i>. Also input <mark>Total Assets from the Beginning of the Year</mark> and <mark>Total Assets from the End of the Year</mark> which can be found in the <i>Balance Sheet</i>.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30); padding-bottom: 5px;"><b>Equation</b>: Revenue / ((Beginning Assets + Ending Assets) / 2)</p>';
    // Fields that need to be added with ids so we can pull the values
    const revenuesField = '<input id="revenueAmount" type="text" placeholder="Revenue" />';
    const beginningAssetsField = '<input id="beginningAssetsAmount" type="text" placeholder="Beginning Total Assets" />';
    const endingAssetsField = '<input id="endingAssetsAmount" type="text" placeholder="Ending Total Assets" />';

    //Calculate button
    const calculateButton = '<button onclick="assetTurnFunc()">Compute</button>';
    const clearButton = '<button onclick="clearAssetTurn()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + revenuesField + beginningAssetsField + endingAssetsField + '</form>' + calculateButton + clearButton;
  }

  // Moving onto cash ratio
  else if (ratioChoice === "cash") {
    const title = '<p style="font-weight: bold; font-size: 18px;">Cash Ratio</p>';
    const desc = '<p>The Cash Ratio is a liquidity ratio that determines whether a company is able to pay short term liabilities with cash on hand. A cash ratio between .5 and 1 is generally considered good for most industries. Above 1 means that the company can cover short term liabilities with more cash leftover.</p>';
    const terms = '<p>In order to calculate this ratio, input <mark>cash</mark>, <mark>cash equivalents</mark>, and <mark>current liabilities</mark> from the balance sheet. Cash equivalents are accounts or financial positions that liquidate easily and have short maturity periods (typically less than 90 days). Some examples of cash equivalents include: Money market funds, treasury bills, or certificates of deposit (CDs).</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: (Cash + Cash Equivalents) / Current Liabilities</p>';
    // Fields that need to be added with ids so we can pull the values
    const cashField = '<input id="cashAmount" type="text" placeholder="Cash" />';
    const cashEquivalentsField = '<input id="cashEquivalentsAmount" type="text" placeholder="Cash Equivalents" />';
    const currentLiabilitiesField = '<input id="currentLiabilitiesAmount" type="text" placeholder="Current Liabilities" />';

    //Calculate button
    const calculateButton = '<button onclick="cashFunc()">Compute</button>';
    const clearButton = '<button onclick="clearCash()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + cashField + cashEquivalentsField + currentLiabilitiesField + '</form>' + calculateButton + clearButton;
  }

  else if (ratioChoice === 'current') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Current Ratio</p>';
    const desc = '<p>The Current Ratio aka Working Capital Ratio indicates the ability of a business to meet yearly short term obligations. Does the company&#39;s current assets cover current liabilities? A current ratio greater than 1 usually indicates good financial health.</p>';
    const terms = '<p>In order to calculate this ratio, input <mark>current assets</mark> and <mark>current liabilities</mark> both of which are found on the <i>Balance Sheet</i> into the fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: Current Assets / Current Liabilities';
    // Fields that need to be added with ids so we can pull the values
    const currentAssetsField = '<input id="currentAssetsAmount" type="text" placeholder="Current Assets" />';
    const currentLiabilitiesField = '<input id="currentLiabilitiesAmount" type="text" placeholder="Current Liabilties" />';

    //Calculate button
    const calculateButton = '<button onclick="currentFunc()">Compute</button>';
    const clearButton = '<button onclick="clearCurrent()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + currentAssetsField + currentLiabilitiesField + '</form>' + calculateButton + clearButton;
  }

  else if (ratioChoice === 'debt') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Debt Ratio</p>';
    const desc = '<p>The Debt Ratio is a leverage ratio. It indicates the company&#39;s extent in using debt to garner assets. A ratio above 1 indicates that much of the assets were obtained through debt. A ratio below 1 indicates that some equity was used to obtain the assets. This ratio is very industry dependent as some will encounter more debt obligations than others; Look at the industry averages before doing any comparisons.</p>';
    const terms = '<p>In order to calculate this ratio, input <mark>Total Debt</mark> and <mark>Total Assets</mark> both of which are found on the <i>Balance Sheet</i> into the fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: Total Debt / Total Assets</p>';
    // Fields that need to be added with ids so we can pull the values
    const totalDebtField = '<input id="totalDebtAmount" type="text" placeholder="Total Debt" />';
    const totalAssetsField = '<input id="totalAssetsAmount" type="text" placeholder="Total Liabilities" />';

    //Calculate button
    const calculateButton = '<button onclick="debtFunc()">Compute</button>';
    const clearButton = '<button onclick="clearDebt()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + totalDebtField + totalAssetsField + '</form>' + calculateButton + clearButton;
  }

  // ratio choice is debt equity
  else if (ratioChoice === 'debt-equity') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Debt to Equity Ratio</p>'
    const desc = '<p>The Debt to Equity ratio is another financial leverage ratio. It communicates to what extent a company is using debt or equity to finance its operations. The ratio tells you apporoximately how much debt you have for every dollar of equity. For instance, if Mountain Side LLC has $67,000 of total liabilities and $100,000 of total shareholder&#39;s equity then Mountain Side has $.67 worth of debt for every $1 worth of equity. A good mix of debt versus equity is generally good, and ratios between sectors might vary.</p>'
    const terms = '<p>In order to calculate this ratio, input <mark>Total Liabilities</mark> and <mark>Total Shareholder&#39;s Equity</mark> both of which are found on the <i>Balance Sheet</i> into the fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: Total Liabilities / Total Equity</p>';
    // Fields that need to be added with ids so we can pull the values
    const totalLiabilitiesField = '<input id="totalLiabilitiesAmount" type="text" placeholder="Total Liabilities" style="width: 200px;" />';
    const totalEquityField = '<input id="totalEquityAmount" type="text" placeholder="Total Shareholder&#39;s Equity" style="width: 200px;"/>';

    const calculateButton = '<button onclick="debtEquityFunc()">Compute</button>'
    const clearButton = '<button onclick="clearDebtEquity()">Clear Fields</button>'

    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + totalLiabilitiesField + totalEquityField + '</form>' + calculateButton + clearButton;
  }

  else if (ratioChoice === 'dividend-yield') {
    let title = '<p style="font-weight: bold; font-size: 18px;">Dividend Yield Ratio</p>';
    const desc = '<p>The Dividend Yield Ratio is a financial ratio. This ratio proves useful if the company has shares of public stock. It relays information about dividends recieved by shareholders in comparison to the market value price of the security. Dividends are only distributed if there is are retained earnings observed in the fiscal period. </p>';
    const disclaimer = '<p style="font-weight:bold;">If you know the dividend per share already then disregard this section...</p>';
    const terms = '<p>In order to calculate this ratio, first we will need to calculate the <mark>Dividend Per Share</mark>. To do this we need the <mark>Total Annual Dividend Payment</mark> and the <mark>Number of Shares Outstanding</mark> of the company, both of which can be found on any reputable public trading website. Once you have calculated the Dividend per Share the value will automatically be added to the field for the Dividend Yield calculation. From here just input the <mark>Market Value per Share</mark> of the security in its respective field.</p>';
    const dpsFormula = '<p><b>Dividend per Share Equation</b>: Total Dividend Payout / Number of Shares Outstanding</p>';
    const dyFormula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Dividend Yield Equation</b>: Dividend per Share / Market Value per Share</p>';
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
    const clearButton = '<button onclick="clearDividend()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + dpsFormula + dyFormula + disclaimer + dividendShareText + '<form autocomplete="off">' + dividendPayoutField + sharesOutstandingField + '</form>' + dividendPerShareButton + dividendYieldText + '<form autocomplete="off">' + dividendPerShareField + marketValuePerShareField + '</form>' + dividendYieldButton + clearButton;
  }

  else if (ratioChoice === 'eps') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Earnings per Share (EPS)</p>';
    const desc = '<p>EPS is a financial ratio which communicates how well a company is able to produce income for its shareholders. EPS in combination with the P/E ratio can be used to determine whether a company&#39;s stock is selling at a premium (higher price) or at a discount (lower price) when compared to others in an industry. It is hard to compare just EPS between companies because each company has a different number of shares outstanding, which impacts the magnitude of the resulting ratio.</p>';
    const terms = '<p>In order to calculate EPS, input <mark>Net Income</mark> which can be found on the <i>Income Statement</i>. Then input <mark>Preferred Dividends</mark> and <mark>End of Period Shares Outstanding</mark> which can be found on the <i>Balance Sheet</i> into the fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: (Net Income - Preferred Dividends) / End of Period Shares Outstanding <i>or</i> Weighted Average Shares Outstanding</p>';
    const disclaimer = '<p style="font-weight: bold;">If you are using the weighted average EPS method then input your Weighted Average Share Number into the End of Period Shares Outstanding</p>';
    // Fields that need to be added with ids so we can pull the values
    const netIncomeField = '<input id="netIncomeAmount" type="text" placeholder="Net Income" style="width: 250px" />';
    const preferredDividendsField = '<input id="preferredDividendsAmount" type="text" placeholder="Preferred Dividends" style="width: 250px" />';
    const endSharesOutstandingField = '<input id="endSharesOutstandingAmount" type="text" placeholder="End of Period Shares Outstanding" style="width: 250px" />';

    //Calculate button
    const calculateButton = '<button onclick="epsFunc()">Compute</button>';
    const clearButton = '<button onclick="clearEps()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + disclaimer + '<form autocomplete="off">' + netIncomeField + preferredDividendsField + endSharesOutstandingField + '</form>' + calculateButton + clearButton;
  }

  else if (ratioChoice === 'gross-margin') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Gross Margin</p>'
    const desc = '<p>Gross Margin is a profitability ratio that determines the relation of revenues to Cost of Goods Sold (COGS). The higher the magnitude of COGS, the lower Gross Margin will be. A higher gross margin is good because it means that the company has more money left to pay its operating expenses.</p>'
    const terms = '<p>In order to calculate Gross Margin, input <mark>Revenue</mark> and <mark>Cost of Goods Sold (COGS)</mark> from the <i>Income Statement</i> into their respective fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: (Revenue - COGS) / Revenue</p>'

    // Fields that need to be added with ids so we can pull the values
    const revenuesField = '<input id="revenueAmount" type="text" placeholder="Revenue" />';
    const cogsField = '<input id="cogsAmount" type="text" placeholder="Cost of Goods Sold" />';

    //Calculate button
    const calculateButton = '<button onclick="grossMarginFunc()">Compute</button>';
    const clearButton = '<button onclick="clearGross()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + revenuesField + cogsField + '</form>' + calculateButton + clearButton;
  }

  else if (ratioChoice === 'price-earnings') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Price Earnings Ratio (P/E)</p>';
    const desc = '<p>The P/E Ratio is a profitability ratio that takes into consideration market share stock price and Earnings per Share (EPS). The P/E ratio is a better indication of a company&#39;s stock health because the difference in number of shares outstanding no longer leads to major disparities between individual companies.</p>';
    const terms = '<p>In order to calculate the P/E ratio, input the <mark>Market Value per Share</mark> of the stock and <mark>Earnings per Share (EPS)</mark>. Market Value per Share is generally the ticker price associated with stocks, while EPS is another calculation that can be computed and copied with the help of this calculator. Input the values into their respective fields below</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: Market Value per Share / EPS';

    // Fields that need to be added with ids so we can pull the values
    const marketValueField = '<input id="marketValueAmount" type="text" placeholder="Market Value per Share" style="width: 200px;" />';
    const epsField = '<input id="epsAmount" type="text" placeholder="Earnings per Share" style="width: 200px;" />';

    //Calculate button
    const calculateButton = '<button onclick="priceEarningsFunc()">Compute</button>';
    const clearButton = '<button onclick="clearPrice()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + marketValueField + epsField + '</form>' + calculateButton + clearButton;
  }

  else if (ratioChoice === 'profit-margin') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Profit Margin Ratio</p>';
    const desc = '<p>Profit Margin aka Net Profit Margin is a profitability ratio that is used to evaluate the percentage of revenues that end up generating Net Income for the company. For instance, if the Profit Margin is 2% this means that for every dollar of sales, 2 cents of net income were observed in the particular fiscal period.</p>';
    const terms = '<p>In order to calculate Profit Margin, input the <mark>Revenue</mark> and <mark>Net Income</mark> which can both be found on the <i>Income Statement</i> into their respective fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: Net Income / Revenue</p>';

    // Fields that need to be added with ids so we can pull the values
    const revenueField = '<input id="revenueAmount" type="text" placeholder="Revenue" />';
    const netIncomeField = '<input id="netIncomeAmount" type="text" placeholder="Net Income" />';

    //Calculate button
    const calculateButton = '<button onclick="profitMarginFunc()">Compute</button>';
    const clearButton = '<button onclick="clearProfitMargin()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + revenueField + netIncomeField + '</form>' + calculateButton + clearButton;
  }

  else if (ratioChoice === 'equity-return') {
    const title = '<p style="font-weight: bold; font-size: 18px;">Return on Equity</p>';
    const desc = '<p>Return on Equity measures a company&#39;s annuals return divided by Total Shareholder&#39;s Equity. This is an interesting ratio because it combines elements from both the income statement and the balance sheet. This ratio measures the company&#39;s ability to turn equity into profit.</p>';
    const terms = '<p>In order to calculate Profit Margin, input the <mark>Net Income</mark> from the <i>Income Statement</i> and <mark>Total Shareholder&#39;s Equity</mark> from the <i>Balance Sheet</i> into their respective fields below.</p>';
    const formula = '<p style="border-bottom: 3px solid rgb(160, 30, 30);padding-bottom: 5px;"><b>Equation</b>: Net Income / Total Shareholder&#39;s Equity</p>';

    // Fields that need to be added with ids so we can pull the values
    const equityField = '<input id="equityAmount" type="text" placeholder="Shareholder&#39;s Equity" />';
    const netIncomeField = '<input id="netIncomeAmount" type="text" placeholder="Net Income" />';

    //Calculate button
    const calculateButton = '<button onclick="equityReturnFunc()">Compute</button>';
    const clearButton = '<button onclick="clearEquity()">Clear Fields</button>'

    // Putting this information into the webpage
    storageDiv.innerHTML = title + desc + terms + formula + '<form autocomplete="off">' + netIncomeField + equityField + '</form>' + calculateButton + clearButton;
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
    results('Acid-Test Ratio');
  }
}

//Clearing the acid inputs
function clearAcidInputs() {
  document.getElementById('cashAmount').value = '';
  document.getElementById('marketAmount').value = '';
  document.getElementById('accountsAmount').value = '';
  document.getElementById('liabilitiesAmount').value = '';
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
    results('Asset Turnover Ratio');
  }
}

function clearAssetTurn() {
  document.getElementById('revenueAmount').value = '';
  document.getElementById('beginningAssetsAmount').value = '';
  document.getElementById('endingAssetsAmount').value = '';
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
    results('Cash Ratio');
  }
}

function clearCash() {
  document.getElementById('cashAmount').value = '';
  document.getElementById('cashEquivalentsAmount').value = '';
  const currentLiabilitiesValue = document.getElementById('currentLiabilitiesAmount').value = '';
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
    results('Current Ratio');
  }
}

function clearCurrent() {
  document.getElementById('currentAssetsAmount').value = '';
  document.getElementById('currentLiabilitiesAmount').value = '';
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
    results('Debt Ratio');
  }
}

function clearDebt() {
  document.getElementById('totalDebtAmount').value= '';
  document.getElementById('totalAssetsAmount').value = '';
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
    results('Debt to Equity Ratio');
  }
}

function clearDebtEquity() {
  document.getElementById('totalLiabilitiesAmount').value = '';
  document.getElementById('totalEquityAmount').value = '';
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

  refinedRatio = dividendYieldRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = "Please input only numbers or decimals"
  }
  else {
    results('Dividend Yield');
  }
}

function clearDividend() {
  document.getElementById('dividendPayoutAmount').value = '';
  document.getElementById('sharesOutstandingAmount').value = '';
  document.getElementById('marketValuePerShareAmount').value = '';
  document.getElementById('dividendPerShareAmount').value = '';
}

// Function for eps calculation
function epsFunc() {
  const netIncomeValue = Number(document.getElementById('netIncomeAmount').value);
  const preferredDividendsValue = Number(document.getElementById('preferredDividendsAmount').value);
  const endSharesOutstandingValue = Number(document.getElementById('endSharesOutstandingAmount').value);


  const epsRatio = (netIncomeValue - preferredDividendsValue) / endSharesOutstandingValue;

  refinedRatio = epsRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    results('EPS');
  }
}

function clearEps() {
  document.getElementById('netIncomeAmount').value= '';
  document.getElementById('preferredDividendsAmount').value = '';
  document.getElementById('endSharesOutstandingAmount').value = '';
}

function grossMarginFunc() {
  const revenueValue = Number(document.getElementById('revenueAmount').value);
  const cogsValue = Number(document.getElementById('cogsAmount').value);

  const grossMarginRatio = (revenueValue - cogsValue) / revenueValue;

  refinedRatio = grossMarginRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    results('Gross Margin');
  }
}

function clearGross() {
  document.getElementById('revenueAmount').value = '';
  document.getElementById('cogsAmount').value = '';
}

// Price earnings calculation
function priceEarningsFunc() {
  const marketShareValue = Number(document.getElementById('marketValueAmount').value);
  const epsValue = Number(document.getElementById('epsAmount').value);

  const priceEarningsRatio = marketShareValue / epsValue;

  refinedRatio = priceEarningsRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    results('P/E ratio');
  }
}

function clearPrice() {
  document.getElementById('marketValueAmount').value = '';
  document.getElementById('epsAmount').value = '';
} 

// Profit margin calculation
function profitMarginFunc() {
  const revenueValue = Number(document.getElementById('revenueAmount').value);
  const netIncomeValue = Number(document.getElementById('netIncomeAmount').value);

  const profitMarginRatio = netIncomeValue / revenueValue;

  refinedRatio = profitMarginRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    results('Profit Margin');
  }
}

function clearProfitMargin() {
  document.getElementById('revenueAmount').value = '';
  document.getElementById('netIncomeAmount').value = '';
}

function equityReturnFunc() {
  const equityValue = Number(document.getElementById('equityAmount').value);
  const netIncomeValue = Number(document.getElementById('netIncomeAmount').value);

  const returnEquityRatio = netIncomeValue / equityValue;

  refinedRatio = returnEquityRatio.toString();

  if (refinedRatio === 'NaN') {
    resultsDiv.innerHTML = 'Only enter numbers or decimals';
  }
  else {
    results('Return on Equity');
  }
}

function clearEquity() {
  document.getElementById('equityAmount').value = '';
  document.getElementById('netIncomeAmount').value = '';
}